"use client";

import useSWR from "swr";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import styles from "./styles.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { Pin } from "./pin";
import { useMapboxStyles } from "./useMapboxStyles";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type POGOpenEvent = {
  lat: number;
  lon: number;
  serial: string;
  timestamp: number;
};

export default function POGDemo() {
  useMapboxStyles();

  const { data: points } = useSWR<POGOpenEvent[]>("https://pog.molefrog.com/stat", fetcher);

  return (
    <>
      <div className={styles.map}>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            latitude: 50.0518891,
            longitude: 10.1791843,
            zoom: 1.5,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/dark-v11"
        >
          <FullscreenControl position="top-right" />

          {points &&
            points.map((pog, idx) => (
              <Marker
                key={`${pog.serial}-${pog.timestamp}-${idx}`}
                longitude={pog.lon}
                latitude={pog.lat}
                anchor="center"
              >
                <Pin delay={idx * 5} />
              </Marker>
            ))}
        </Map>
      </div>
    </>
  );
}
