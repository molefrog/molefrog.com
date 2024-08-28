"use client";

import { init } from "@instantdb/react";
import { useEffect, useState } from "react";
import { RealTimeCanvas as Canvas, Schema, User } from "./RealTimeCanvas";

// shell: inits the connection
export function RealTimeCanvas() {
  const [user, setUser] = useState<User | null>(null);
  const [db] = useState(() => init<Schema>({ appId: process.env.NEXT_PUBLIC_INSTANTDB_APP_ID! }));

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

  return <Canvas db={db} user={user} />;
}
