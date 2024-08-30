import { id, init, tx } from "@instantdb/react";
import { useMouse } from "@uidotdev/usehooks";
import { AnimatePresence } from "framer-motion";

import { useEffect, useMemo, useState } from "react";
import useSound from "use-sound";
import { Cursor } from "./Cursor";
import styles from "./RealTimeCanvas.module.css";
import Sticker from "./Sticker";

import stickSfx from "./stick.mp3";

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

// Define the Sticker type (in the DB)
type Sticker = {
  x: number;
  y: number;
  label: string | undefined;
  user: string;
};

export function RealTimeCanvas({ db, user }: { user: User; db: DB }) {
  const [mouse, containerRef] = useMouse<HTMLDivElement>();
  const [room] = useState(() => db.room("realTimeCanvas", "404"));
  const [playSound] = useSound(stickSfx, { volume: 0.75, playbackRate: 1.1 });
  const [isCursorVisible, setIsCursorVisible] = useState(true);

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

  const light = useMemo<[number, number]>(() => [800, 300], []);
  const { isLoading, data } = db.useQuery({ stickers: {} });

  const handleClick = () => {
    if (!user.id || !data?.stickers) return;

    setIsCursorVisible(false);
    setTimeout(() => {
      setIsCursorVisible(true);
    }, 1000);

    const stickerId = data.stickers.find((sticker) => sticker.user === user.id)?.id ?? id();

    playSound();

    db.transact([
      tx.stickers[stickerId].update({
        x: mouse.elementX,
        y: mouse.elementY,
        label: user.name,
        user: user.id,
      }),
    ]);
  };

  if (isLoading || !data) return null;

  return (
    <div className={styles.container} ref={containerRef} onClick={handleClick}>
      {/* Shadow Sticker that always follows the cursor */}

      <AnimatePresence>
        {data.stickers.map((sticker) => {
          return (
            <Sticker
              x={sticker.x}
              y={sticker.y}
              key={sticker.id + sticker.x + sticker.y}
              lightSource={light}
              label={sticker.label}
            />
          );
        })}
      </AnimatePresence>

      {Object.entries(peers).map(([peerId, v]) => {
        return (
          <Cursor
            player={{ x: v.x, y: v.y, name: v.name, color: v.color }}
            type="arrow"
            isMe={false}
            key={`peer-cursor:${peerId}`}
          />
        );
      })}

      {/* My Cursor */}
      <Cursor
        type="sticker"
        player={{ x: mouse.elementX, y: mouse.elementY, name: user.name, color: user.color }}
        isMe={true}
        visible={isCursorVisible}
      />
    </div>
  );
}
