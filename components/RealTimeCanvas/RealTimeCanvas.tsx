import { init, tx } from "@instantdb/react";
import { useMouse } from "@uidotdev/usehooks";
import { AnimatePresence } from "framer-motion";

import styles from "./RealTimeCanvas.module.css";
import Sticker from "./Sticker";

export type Schema = {
  stickers: Sticker;
};

export type DB = ReturnType<typeof init<Schema>>;

export type User = {
  id: string;
  name: string;
};

// Define the Sticker type
type Sticker = {
  x: number;
  y: number;
  label: string | undefined;
};

export function RealTimeCanvas({ db, user }: { user: User; db: DB }) {
  const [mouse, containerRef] = useMouse<HTMLDivElement>();

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
              label={sticker.label}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
