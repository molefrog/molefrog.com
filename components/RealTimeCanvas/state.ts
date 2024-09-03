import { atom } from "jotai";
import { StickerAssetName } from "./stickers";

// Define the enum for your state
export enum Tool {
  Cursor = "cursor",
  Sticker = "sticker",
}

export type Coords = [number, number];

// Atom to manage the current tool
export const $currentTool = atom<Tool>(Tool.Sticker);

// Derived atom to check if the user is currently editing
export const $isEditing = atom((get) => get($currentTool) !== Tool.Cursor);

// Atom to manage the sticker tool options
export const $stickerToolProps = atom({
  asset: "milk" as StickerAssetName,
  angle: -5,
});

// Atom to manage the position of the light source
export const $lightSourcePosition = atom<Coords>([800, 400]);
