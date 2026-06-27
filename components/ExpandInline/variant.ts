import { atom } from "nanostores";
import { DEFAULT_VARIANT, VARIANTS, VariantId } from "./synth";

const storageKey = "ce-tune-variant";

const readInitial = (): VariantId => {
  if (typeof window === "undefined") return DEFAULT_VARIANT;
  try {
    const v = window.localStorage.getItem(storageKey) as VariantId | null;
    if (v && VARIANTS.find((x) => x.id === v)) return v;
  } catch {}
  return DEFAULT_VARIANT;
};

export const $variant = atom<VariantId>(DEFAULT_VARIANT);

if (typeof window !== "undefined") {
  $variant.set(readInitial());
  $variant.listen((v) => {
    try {
      window.localStorage.setItem(storageKey, v);
    } catch {}
  });
}
