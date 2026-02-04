"use client";

import useSWR from "swr";
import Map, { Marker, FullscreenControl } from "react-map-gl";
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
  country: string;
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

const revealInOrderOfActivation = (points: POGOpenEvent[]) => {
  const ts = points.map((p) => p.timestamp);

  const min = Math.min(...ts),
    max = Math.max(...ts);

  let latestTimestampPerCountry: Record<string, number> = {};

  for (const { timestamp, country } of points) {
    latestTimestampPerCountry[country] = Math.max(
      latestTimestampPerCountry[country] ?? 0,
      timestamp,
    );
  }

  return (p: POGOpenEvent, total: number = 1000) => {
    if (isFinite(min) && isFinite(max) && max !== min) {
      const ts = latestTimestampPerCountry[p.country] ?? p.timestamp;

      const t = (ts - min) / (max - min);
      return t * total;
    } else {
      return 0;
    }
  };
};

export default function POGDemo() {
  useMapboxStyles();

  const { data: points } = useSWR<POGOpenEvent[]>("https://pog.molefrog.com/stat", fetcher);
  const latestPoint = points && points[points.length - 1];

  const delay = revealInOrderOfActivation(points || []);

  return (
    <>
      <div className="-m-4 mb-3 h-[280px] rounded-t-2xl overflow-hidden">
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
                <Pin delay={delay(pog)} active={idx === points.length - 1} />
              </Marker>
            ))}
        </Map>
      </div>
      {latestPoint && (
        <div className="text-[13px] leading-[22px] font-medium font-mono mb-[22px]">
          <span className="inline-block bg-gray-900 font-bold text-white py-0 px-1.5 rounded-[32px] mr-1.5">
            #{latestPoint.serial}
          </span>
          {latestPoint.location}{" "}
          <span className="text-gray-400">/ {formatDate(latestPoint.timestamp)}</span>
        </div>
      )}

      <p>
        Whenever I meet someone, I hand them a{" "}
        <a href="https://www.instagram.com/reel/C3XXjCQsEYy">POG</a>. It&apos;s a small circular
        token with an NFC-chip that, when scanned, leads to my website. It&apos;s somewhat like a
        business card, but less formal.
      </p>

      <div className="flex items-start my-4 -mx-4">
        <div>
          <video className="w-full pointer-events-none" autoPlay loop muted playsInline>
            <source src={clip1} type="video/mp4" />
          </video>
        </div>
        <div>
          <video className="w-full pointer-events-none" autoPlay loop muted playsInline>
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
