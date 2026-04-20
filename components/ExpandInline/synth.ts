import {
  Chorus,
  Distortion,
  FMSynth,
  Filter,
  PolySynth,
  Reverb,
  Synth,
  now as nowTone,
  start as startToneJS,
} from "tone";
import { $note } from "./SolfegeHands";

/*
    .-=-.
 .-' . . '-.
 Close Encounters of the Third Kind — John Williams, 1977.
 Five-note motif: Re – Mi – Do – Do' – Sol'
 (originally played on an ARP 2500 modular synth in the film)
 https://www.ars-nova.com/Theory%20Q&A/Q35.html
*/

type PlayFn = (n?: number) => Promise<void>;

export type VariantId =
  | "current"
  | "mothership"
  | "tubular"
  | "arp2500"
  | "pure"
  | "celesta";

export type Variant = {
  id: VariantId;
  name: string;
  blurb: string;
  build: () => PlayFn;
};

// Solfege-respecting pattern: Re Mi Do Do' Sol'
// Changing the first note effectively transposes the whole motif.

const makePlayer = (
  notes: string[],
  trigger: (note: string, time: number) => void,
  opts: { delay: number; holdMs?: number } = { delay: 0.3 },
): PlayFn => {
  let offset = 0;

  return async (n = 3) => {
    await startToneJS();

    for (let i = 0; i < n; i++) {
      const index = (offset + i) % notes.length;
      const note = notes[index];
      const playTime = nowTone() + i * opts.delay;

      trigger(note, playTime);

      setTimeout(
        () => {
          $note.set(note);
        },
        i * opts.delay * 1000,
      );
    }

    offset = (offset + n) % notes.length;
  };
};

/* ----------------------------- Variants ----------------------------- */

// A. Original — amtriangle + distortion + reverb, fast, low register.
const buildCurrent = (): PlayFn => {
  const notes = ["G3", "A3", "F3", "F2", "C2"];
  const synth = new Synth({
    oscillator: { type: "amtriangle", harmonicity: 0.5, modulationType: "sine" },
    envelope: {
      attackCurve: "exponential",
      attack: 0.05,
      decay: 0.2,
      sustain: 0.2,
      release: 1.5,
    },
    portamento: 0.05,
  });
  const reverb = new Reverb({ decay: 1 }).toDestination();
  const dist = new Distortion({ distortion: 1 }).toDestination();
  synth.connect(reverb).connect(dist);
  synth.toDestination();

  return makePlayer(notes, (note, time) => synth.triggerAttackRelease(note, "16n", time), {
    delay: 0.15,
  });
};

// B. Mothership — bell-like FM, one octave up, slow & spacious.
const buildMothership = (): PlayFn => {
  const notes = ["G4", "A4", "F4", "F3", "C3"];
  const synth = new FMSynth({
    harmonicity: 3.01,
    modulationIndex: 14,
    oscillator: { type: "sine" },
    envelope: { attack: 0.002, decay: 1.2, sustain: 0, release: 1.8 },
    modulation: { type: "triangle" },
    modulationEnvelope: { attack: 0.002, decay: 0.4, sustain: 0, release: 0.6 },
  });
  const reverb = new Reverb({ decay: 4, wet: 0.6 }).toDestination();
  synth.connect(reverb);
  synth.toDestination();

  return makePlayer(notes, (note, time) => synth.triggerAttackRelease(note, "4n", time), {
    delay: 0.36,
  });
};

// C. Tubular — PolySynth with triangle, lush reverb, movie register.
const buildTubular = (): PlayFn => {
  const notes = ["D5", "E5", "C5", "C4", "G4"];
  const poly = new PolySynth(Synth, {
    oscillator: { type: "triangle" },
    envelope: { attack: 0.01, decay: 0.6, sustain: 0.3, release: 2.5 },
  });
  const filter = new Filter({ frequency: 3800, type: "lowpass", rolloff: -12 });
  const reverb = new Reverb({ decay: 5, wet: 0.55 }).toDestination();
  poly.chain(filter, reverb);

  return makePlayer(notes, (note, time) => poly.triggerAttackRelease(note, "2n", time), {
    delay: 0.32,
  });
};

// D. ARP 2500 — homage to the film’s actual synthesizer. Detuned triangle stack
//    with chorus and a little grit, sustained.
const buildArp2500 = (): PlayFn => {
  const notes = ["G4", "A4", "F4", "F3", "C3"];
  const poly = new PolySynth(Synth, {
    oscillator: { type: "fattriangle", count: 3, spread: 30 } as any,
    envelope: { attack: 0.02, decay: 0.25, sustain: 0.7, release: 1.6 },
    portamento: 0.02,
  });
  const chorus = new Chorus({ frequency: 0.8, delayTime: 3.5, depth: 0.6, wet: 0.6 }).start();
  const reverb = new Reverb({ decay: 3.5, wet: 0.45 });
  poly.chain(chorus, reverb);
  reverb.toDestination();

  return makePlayer(notes, (note, time) => poly.triggerAttackRelease(note, "2n", time), {
    delay: 0.42,
  });
};

// E. Pure — simple sine, minimal effects, mid register.
const buildPure = (): PlayFn => {
  const notes = ["D4", "E4", "C4", "C3", "G3"];
  const synth = new Synth({
    oscillator: { type: "sine" },
    envelope: { attack: 0.005, decay: 0.4, sustain: 0.2, release: 1.4 },
  });
  const reverb = new Reverb({ decay: 2.5, wet: 0.4 }).toDestination();
  synth.connect(reverb);
  synth.toDestination();

  return makePlayer(notes, (note, time) => synth.triggerAttackRelease(note, "4n", time), {
    delay: 0.28,
  });
};

// F. Celesta — twinkly high register with FM + short reverb.
const buildCelesta = (): PlayFn => {
  const notes = ["D5", "E5", "C5", "C4", "G4"];
  const synth = new FMSynth({
    harmonicity: 2.5,
    modulationIndex: 8,
    oscillator: { type: "sine" },
    envelope: { attack: 0.001, decay: 0.8, sustain: 0, release: 1.2 },
    modulation: { type: "sine" },
    modulationEnvelope: { attack: 0.001, decay: 0.25, sustain: 0, release: 0.4 },
  });
  const reverb = new Reverb({ decay: 2, wet: 0.5 }).toDestination();
  synth.connect(reverb);
  synth.toDestination();

  return makePlayer(notes, (note, time) => synth.triggerAttackRelease(note, "8n", time), {
    delay: 0.3,
  });
};

/* --------------------------- Registry --------------------------- */

export const VARIANTS: Variant[] = [
  {
    id: "mothership",
    name: "Mothership",
    blurb: "FM bell, +1 octave, spacious reverb",
    build: buildMothership,
  },
  {
    id: "tubular",
    name: "Tubular",
    blurb: "Polyphonic triangle, lush hall",
    build: buildTubular,
  },
  {
    id: "arp2500",
    name: "ARP 2500",
    blurb: "Detuned triangle stack, chorus, homage to the film",
    build: buildArp2500,
  },
  {
    id: "celesta",
    name: "Celesta",
    blurb: "High FM sparkle",
    build: buildCelesta,
  },
  {
    id: "pure",
    name: "Pure",
    blurb: "Clean sine, minimal fx",
    build: buildPure,
  },
  {
    id: "current",
    name: "Original",
    blurb: "Current buzzy low-octave version",
    build: buildCurrent,
  },
];

export const DEFAULT_VARIANT: VariantId = "mothership";

// Legacy export — keep the old signature so existing code compiles.
// Defaults to the new Mothership variant unless overridden via VariantId.
export const synth = (variant: VariantId = DEFAULT_VARIANT): PlayFn => {
  const v = VARIANTS.find((x) => x.id === variant) ?? VARIANTS[0];
  return v.build();
};
