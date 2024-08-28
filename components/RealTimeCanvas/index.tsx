"use client";

import { id, init, tx } from "@instantdb/react";
import { useMouse } from "@uidotdev/usehooks";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useCookie } from "react-use";

import styles from "./RealTimeCanvas.module.css";
import Sticker from "./Sticker";

type Schema = {
  stickers: {
    x: number;
    y: number;
  };
};

const db = init<Schema>({ appId: process.env.NEXT_PUBLIC_INSTANTDB_APP_ID! });

const useUserId = (): string | null => {
  const [_id, setId] = useState<string | null>(null);
  const [value, update] = useCookie("rt-canvas-uid");

  useEffect(() => {
    if (!value) {
      const newId = id();
      setId(newId);
      update(newId);
    } else {
      setId(value);
    }
  }, [value, update]);

  return _id;
};

// Define the Sticker type
type Sticker = {
  x: number;
  y: number;
};

export function RealTimeCanvas() {
  const [stickerPosition, setStickerPosition] = useState<Sticker | null>(null);
  const [mouse, containerRef] = useMouse<HTMLDivElement>();

  const userId = useUserId();

  const handleClick = () => {
    if (!userId) return;

    db.transact([
      tx.stickers[userId].update({
        x: mouse.elementX,
        y: mouse.elementY,
      }),
    ]);
    setStickerPosition({ x: mouse.elementX, y: mouse.elementY });
  };

  const { isLoading, data } = db.useQuery({ stickers: {} });

  if (!userId || !data) return null;

  return (
    <div className={styles.container} ref={containerRef} onClick={handleClick}>
      {/* Shadow Sticker that always follows the cursor */}

      {/*<Sticker
        position={[mouse.elementX, mouse.elementY]}
        lightSource={[800, 300]}
        attached={false}
        label="Sticker Shadow"
      />*/}

      <AnimatePresence>
        {data.stickers.map((sticker) => {
          return (
            <Sticker
              position={[sticker.x, sticker.y]}
              key={sticker.id + sticker.x + sticker.y}
              lightSource={[800, 300]}
              attached
              label="attached"
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
