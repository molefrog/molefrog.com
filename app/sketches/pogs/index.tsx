"use client";

import useSWR from "swr";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import styles from "./styles.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { Pin } from "./pin";
import { useMapboxStyles } from "./useMapboxStyles";

import clip1 from "./clip-1.mp4";
import clip2 from "./clip-2.mp4";
import _clip3 from "./clip-3.mp4";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type POGOpenEvent = {
  lat: number;
  lon: number;
  serial: string;
  timestamp: number;
  location: string;
};

function formatDate(timestamp: number) {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return dateFormatter.format(new Date(timestamp));
}

export default function POGDemo() {
  useMapboxStyles();

  const { data: points } = useSWR<POGOpenEvent[]>("https://pog.molefrog.com/stat", fetcher);
  const latestPoint = points && points[points.length - 1];

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
                <Pin delay={idx * 5} active={idx === points.length - 1} />
              </Marker>
            ))}
        </Map>
      </div>
      {latestPoint && (
        <div className={styles.latest}>
          <span className={styles.serial}>#{latestPoint.serial}</span>
          {latestPoint.location}{" "}
          <span className={styles.date}>/ {formatDate(latestPoint.timestamp)}</span>
        </div>
      )}

      <p>
        Whenever I meet someone, I hand them a POG. It&apos;s a small circular token with an
        NFC-chip that, when scanned, leads to my website. It&apos;s somewhat like a business card,
        but less formal.
      </p>

      <div className={styles.clips}>
        <div>
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src={clip1} type="video/mp4" />
          </video>
        </div>
        <div>
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src={clip2} type="video/mp4" />
          </video>
        </div>
      </div>
      <p>
        I can track when someone scans a tag (anonymously), and it&apos;s enjoyable to see how these
        tokens travel around the world.
      </p>
    </>
  );
}
