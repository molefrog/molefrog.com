"use client";

import useSWR from "swr";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import styles from "./styles.module.css";

import { Pin } from "./pin";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type POGOpenEvent = {
  lat: number;
  lon: number;
  serial: string;
  timestamp: number;
};

export default function POGDemo() {
  const { data } = useSWR<POGOpenEvent[]>("https://pog.molefrog.com/stat", fetcher);

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

          {data &&
            data.map((pog, idx) => (
              <Marker
                key={`${pog.serial}-${pog.timestamp}-${idx}`}
                longitude={pog.lon}
                latitude={pog.lat}
                anchor="center"
              >
                <Pin />
              </Marker>
            ))}
        </Map>
      </div>

      {/** TODO */}
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.css"
        rel="stylesheet"
      />
    </>
  );
}
