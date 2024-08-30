import { Squircle } from "@squircle-js/react";
import clsx from "clsx";
import styles from "./Cursor.module.css";
import { StickerSprite } from "./Sticker";

import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import { useMemo } from "react";

extend([a11yPlugin]);

type Player = {
  x: number;
  y: number;
  color: string;
  name: string;
};

interface CursorProps {
  player: Player;
  isMe?: boolean;
  type: "arrow" | "sticker";
  visible?: boolean;
}

const PlayerName = ({ color, name }: { color: string; name: string }) => {
  const isBright = useMemo(() => colord(color).luminance() > 0.3, [color]);

  const shadowColor = useMemo(() => {
    if (isBright) return colord(color).lighten(0.1).toHex();

    return "black";
  }, [isBright, color]);

  const textColor = useMemo(() => {
    if (isBright) return colord(color).darken(0.5).toHex();

    return "white";
  }, [isBright, color]);

  return (
    <div className={styles.labelWrap}>
      <Squircle
        className={clsx(styles.label)}
        style={
          {
            backgroundColor: color,
            color: textColor,
            "--shadow-color": shadowColor,
          } as React.CSSProperties
        }
        cornerRadius={8}
        cornerSmoothing={1}
      >
        {name || "Unknown"}
      </Squircle>
    </div>
  );
};

export const Cursor = ({ visible = true, type, player, isMe = false }: CursorProps) => {
  const userTypeClass = isMe ? styles.cursor_me : styles.cursor_other;
  const isTool = type !== "arrow";

  return (
    <div
      className={clsx(
        styles.cursor,
        userTypeClass,
        isTool ? styles.cursor_tool : styles.cursor_arrow,
      )}
      style={{
        transform: `translate(
          calc(var(--offset-x) + ${player.x}px),
          calc(var(--offset-y) + ${player.y}px)
        )`,
        opacity: visible ? 1 : 0,
      }}
    >
      {isTool ? (
        <div className={styles.sticker}>
          <StickerSprite x={player.x} y={player.y} lightSource={[800, 300]} elevation={1} />
        </div>
      ) : (
        <HandIcon />
      )}

      <PlayerName color={player.color} name={player.name} />
    </div>
  );
};

const HandIcon = () => {
  return (
    <svg
      className={styles.arrow}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M2.188 1.363a1.015 1.015 0 0 0-.575.662c-.038.163.2 3 .975 11.238.575 6.062 1.15 12.25 1.287 13.762.138 1.513.275 2.838.313 2.963.187.662.95.975 1.55.612.1-.05 1.487-1.925 3.287-4.425a925.95 925.95 0 0 0 3.163-4.4c.025-.037 2.137-.1 5.625-.175 3.475-.075 5.687-.137 5.837-.187.675-.188.963-1.05.525-1.6-.062-.088-1.737-1.563-3.7-3.288C18.5 14.8 13.813 10.7 10.038 7.413c-3.775-3.288-6.925-6.038-7.05-6.088-.275-.112-.5-.1-.8.038"
      />
    </svg>
  );
};
