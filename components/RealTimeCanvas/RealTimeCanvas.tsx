import { id, init, tx } from "@instantdb/react";
import { useMouse } from "@uidotdev/usehooks";
import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import useSound from "use-sound";
import { Cursor } from "./Cursor";
import styles from "./RealTimeCanvas.module.css";
import Sticker from "./Sticker";

import { useAtom } from "jotai";
import { $currentTool, $stickerToolProps, Tool } from "./state";
import stickSfx from "./stick.mp3";
import { StickerAssetName, stickers } from "./stickers";

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
  asset: StickerAssetName;
  angle: number; // in degrees
  attachedAt: number;
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

  const { isLoading, data } = db.useQuery({ stickers: {} });

  const [currentTool, setCurrentTool] = useAtom($currentTool);
  const [stickerToolProps, setStickerToolProps] = useAtom($stickerToolProps);

  const handleClick = () => {
    if (!user.id || !data?.stickers) return;
    if (currentTool === Tool.Cursor) return;

    setIsCursorVisible(false);
    setTimeout(() => {
      setIsCursorVisible(true);
    }, 2000);

    const stickerId = data.stickers.find((sticker) => sticker.user === user.id)?.id ?? id();

    playSound();

    db.transact([
      tx.stickers[stickerId].update({
        x: mouse.elementX,
        y: mouse.elementY,
        label: user.name,
        user: user.id,
        angle: stickerToolProps.angle,
        asset: stickerToolProps.asset,
        attachedAt: Date.now(),
      }),
    ]);

    const stickerNames = Object.keys(stickers) as Array<StickerAssetName>;

    setStickerToolProps({
      ...stickerToolProps,
      asset: stickerNames[Math.floor(Math.random() * stickerNames.length)],
      angle: Math.floor(-10 + 20 * Math.random()),
    });
  };

  const [animateStickers, setAnimateStickers] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setAnimateStickers(true);
      }, 0);
    }
  }, [isLoading]);

  if (isLoading || !data) return null;

  const stickerOrder = Object.fromEntries(
    data.stickers
      .toSorted((a, b) => {
        return (Number(a.attachedAt) ?? 0) - (Number(b.attachedAt) ?? 0);
      })
      .map((s, idx) => {
        return [s.id, idx];
      }),
  );

  return (
    <div className={styles.container} ref={containerRef} onClick={handleClick}>
      {/* Shadow Sticker that always follows the cursor */}

      <div className={styles.stickers}>
        <AnimatePresence initial={false}>
          {data.stickers.map((sticker) => {
            return (
              <Sticker
                x={sticker.x}
                y={sticker.y}
                asset={sticker.asset}
                angle={sticker.angle ?? 0}
                key={sticker.id + sticker.x + sticker.y}
                label={sticker.label}
                order={stickerOrder[sticker.id]}
                animation={animateStickers ? "stamp" : "pop"} // `initial` won't affect manual animations (via `useAnimate`)
                animationDelay={Math.random() * 0.5}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {Object.entries(peers).map(([peerId, v]) => {
        return (
          <Cursor
            player={{ x: v.x, y: v.y, name: v.name, color: v.color }}
            isMe={false}
            key={`peer-cursor:${peerId}`}
          />
        );
      })}

      {/* My Cursor */}
      <Cursor
        player={{ x: mouse.elementX, y: mouse.elementY, name: user.name, color: user.color }}
        isMe={true}
        visible={isCursorVisible}
      />
    </div>
  );
}
