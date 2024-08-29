"use client";

import { init } from "@instantdb/react";
import seedrandom from "random-seed";
import { useEffect, useState } from "react";
import { RealTimeCanvas as Canvas, RoomSchema, Schema, User } from "./RealTimeCanvas";

// shell: inits the connection
export function RealTimeCanvas() {
  const [user, setUser] = useState<User | null>(null);
  const [db] = useState(() =>
    init<Schema, RoomSchema>({ appId: process.env.NEXT_PUBLIC_INSTANTDB_APP_ID! }),
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (user) return;

      try {
        const response = await fetch("/real-time/id");

        if (response.ok) {
          const data: User = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, [user]);

  if (!user) return null;

  return <Canvas db={db} user={{ ...user, color: genUserColor(user.name, user.id) }} />;
}

/* tiny utility for getting a nice color for the current user */
const NICE_COLORS = [
  "#2857b7",
  "#8941cd",
  "#893863",
  "#f1520a",
  "#d70d8a",
  "#1c8cf0",
  "#bde646",
  "#9f1ab0",
  "#0c23ea",
  "#07829f",
  "#2997f9",
  "#3a15d1",
  "#4144c5",
  "#08682d",
  "#c4451a",
  "#be50a5",
  "#a0640c",
  "#5371ce",
  "#0c07ca",
  "#ce8e0e",
  "#1f353d",
  "#51674d",
  "#695c85",
  "#dc7b63",
  "#d96047",
  "#f4b940",
  "#aa9e96",
  "#7e7d80",
  "#c6883b",
  "#c95874",
  "#dc7fa4",
  "#e092a4",
  "#73211b",
  "#5987c0",
  "#9767c2",
  "#572c77",
  "#61a854",
  "#23252d",
];

const genUserColor = (name: string, id: string) => {
  if (name === "localhost") return "#0f0f11";

  const seed = seedrandom.create(id);
  return NICE_COLORS[Math.floor(seed.random() * NICE_COLORS.length)];
};
