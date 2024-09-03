import ash from "./ash.png";
import lyoha from "./lyoha.png";
import milk from "./milk.png";
import nokia from "./nokia.png";
import tisha from "./tisha.png";
import toilet from "./toilet.png";
import memo from "./use-memo.png";
import wouter from "./wouter.png";

export const stickers = {
  toilet,
  ash,
  milk,
  wouter,
  memo,
  nokia,
  tisha,
  lyoha,
} as const;

export type StickerAssetName = keyof typeof stickers;
