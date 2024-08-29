import { init, tx } from "@instantdb/react";
import { useMouse } from "@uidotdev/usehooks";
import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import { Cursor } from "./Cursor";
import styles from "./RealTimeCanvas.module.css";
import Sticker from "./Sticker";

export type User = {
  id: string;
  name: string;
  color: string;
};

export type Schema = {
  stickers: Sticker;
};

export type RoomSchema = {
  realTimeCanvas: {
    presence: User & { x: number; y: number };
  };
};

export type DB = ReturnType<typeof init<Schema, RoomSchema>>;

// Define the Sticker type
type Sticker = {
  x: number;
  y: number;
  label: string | undefined;
};

export function RealTimeCanvas({ db, user }: { user: User; db: DB }) {
  const [mouse, containerRef] = useMouse<HTMLDivElement>();
  const [room] = useState(() => db.room("realTimeCanvas", "404"));

  const { user: myPresence, peers, publishPresence } = room.usePresence();
  const [publish] = useState(() => publishPresence);

  // Publish your presence to the room
  useEffect(() => {
    publish({
      id: user.id,
      name: user.name,
      color: user.color,
      x: 500,
      y: 500,
    });
  }, [user, publish]);

  // Publish your presence to the room
  useEffect(() => {
    publish({
      x: mouse.elementX,
      y: mouse.elementY,
    });
  }, [mouse, publish]);

  const { isLoading, data } = db.useQuery({ stickers: {} });
  if (isLoading || !data) return null;

  const handleClick = () => {
    if (!user.id) return;

    db.transact([
      tx.stickers[user.id].update({
        x: mouse.elementX,
        y: mouse.elementY,
        label: user.name,
      }),
    ]);
  };

  return (
    <div className={styles.container} ref={containerRef} onClick={handleClick}>
      {/* Shadow Sticker that always follows the cursor */}

      <AnimatePresence>
        {data.stickers.map((sticker) => {
          return (
            <Sticker
              position={[sticker.x, sticker.y]}
              key={sticker.id + sticker.x + sticker.y}
              lightSource={[800, 300]}
              attached
              label={sticker.label}
            />
          );
        })}
      </AnimatePresence>

      <Cursor
        player={{ x: mouse.elementX, y: mouse.elementY, name: user.name, color: user.color }}
        isMe={true}
      />

      {Object.entries(peers).map(([peerId, v]) => {
        return (
          <Cursor
            player={{ x: v.x, y: v.y, name: v.name, color: v.color }}
            isMe={false}
            key={`peer-cursor:${peerId}`}
          />
        );
      })}
    </div>
  );
}
