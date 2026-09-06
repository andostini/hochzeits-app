"""Fetch hotel coordinates from Google Maps links and update the SQL schema."""

import argparse
import re
import sqlite3
import subprocess
from pathlib import Path
from typing import List, Tuple

START_MARKER = "-- BEGIN GENERATED HOTEL COORDINATES"
END_MARKER = "-- END GENERATED HOTEL COORDINATES"


def read_hotels(schema_path: Path) -> List[Tuple[int, str]]:
    connection = sqlite3.connect(":memory:")
    try:
        schema = schema_path.read_text(encoding="utf-8")
        schema = re.sub(r"\bTrue\b", "1", schema)
        schema = re.sub(r"\bFalse\b", "0", schema)
        schema = re.sub(r"\bNull\b", "NULL", schema)
        connection.executescript(schema)
        return connection.execute("SELECT id, googleMaps FROM hotels ORDER BY id").fetchall()
    finally:
        connection.close()


def geocode(google_maps_url: str) -> Tuple[float, float]:
    result = subprocess.run(
        [
            "curl",
            "--location",
            "--silent",
            "--show-error",
            "--max-time",
            "30",
            "--user-agent",
            "hochzeit-hotel-geocoder/1.0",
            "--write-out",
            "\n%{url_effective}",
            google_maps_url,
        ],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        universal_newlines=True,
    )
    content, effective_url = result.stdout.rsplit("\n", 1)
    coordinate_patterns = (
        r"@(-?\d+\.\d+),(-?\d+\.\d+)",
        r"!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)",
    )
    for pattern in coordinate_patterns:
        match = re.search(pattern, effective_url) or re.search(pattern, content)
        if match:
            return float(match.group(1)), float(match.group(2))
    raise RuntimeError(f"No coordinates found in Google Maps response for {google_maps_url!r}")


def update_schema(schema_path: Path, coordinates: List[Tuple[int, float, float]]) -> None:
    schema = schema_path.read_text(encoding="utf-8")
    statements = "\n".join(
        f"UPDATE hotels SET lat = {lat:.7f}, lng = {lng:.7f} WHERE id = {hotel_id};"
        for hotel_id, lat, lng in coordinates
    )
    generated_block = f"{START_MARKER}\n{statements}\n{END_MARKER}"
    marker_pattern = re.compile(
        rf"{re.escape(START_MARKER)}.*?{re.escape(END_MARKER)}", re.DOTALL
    )

    if marker_pattern.search(schema):
        schema = marker_pattern.sub(generated_block, schema)
    else:
        schema = f"{schema.rstrip()}\n\n{generated_block}\n"
    schema_path.write_text(schema, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--schema",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "flaskr" / "schema.sql",
        help="Path to schema.sql",
    )
    args = parser.parse_args()

    hotels = read_hotels(args.schema)
    coordinates: List[Tuple[int, float, float]] = []
    for hotel_id, google_maps_url in hotels:
        lat, lng = geocode(google_maps_url)
        print(f"{hotel_id}: {google_maps_url} -> {lat:.7f}, {lng:.7f}")
        coordinates.append((hotel_id, lat, lng))

    update_schema(args.schema, coordinates)
    print(f"Updated {args.schema} with {len(coordinates)} hotel coordinates.")


if __name__ == "__main__":
    main()
