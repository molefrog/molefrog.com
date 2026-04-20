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

 Each position in the motif has a real rhythmic value (in beats). The gap
 to the next note equals the current note's duration, and the synth
 holds the note for that same duration — so audio and UI stay locked to
 the same timing.
*/

export type VariantId =
  | "current"
  | "mothership"
  | "tubular"
  | "arp2500"
  | "pure"
  | "celesta";

/**
 * Relative note durations, one per position (Re, Mi, Do, Do', Sol').
 * Canonical Close Encounters feel: short, short, a beat longer, short,
 * then a long held tail. Each burst naturally ends/lands on its rhythmic
 * peak because of cyclic advancement.
 */
const CLASSIC_RHYTHM = [1, 1, 2, 1, 3] as const;

export type PlayPlan = {
  /** Onset of each note in seconds, relative to click time. */
  onsets: number[];
  /** Total time the full burst spans (last onset + last note duration). */
  total: number;
};

export type PlayFn = (n: number) => PlayPlan;

type TriggerFn = (note: string, time: number, dur: number) => void;

export type Variant = {
  id: VariantId;
  name: string;
  blurb: string;
  /** Seconds per rhythm unit (beat). Smaller = faster. */
  beat: number;
  rhythm: readonly number[];
  build: (cfg: { rhythm: readonly number[]; beat: number }) => PlayFn;
};

const makePlayer = (
  notes: string[],
  trigger: TriggerFn,
  rhythm: readonly number[],
  beat: number,
): PlayFn => {
  let offset = 0;

  return (n) => {
    // Build the timing plan synchronously so the caller can schedule the UI
    // immediately without waiting on Tone's audio-context startup.
    const onsets: number[] = [];
    const durations: number[] = [];
    let t = 0;
    for (let i = 0; i < n; i++) {
      const pos = (offset + i) % notes.length;
      const dur = rhythm[pos] * beat;
      onsets.push(t);
      durations.push(dur);
      t += dur;
    }
    const total = t;
    const plannedNotes = onsets.map((_, i) => notes[(offset + i) % notes.length]);
    offset = (offset + n) % notes.length;

    // Audio scheduling is async (Tone.start must resolve on the first user
    // gesture). Subsequent calls resolve instantly, so there's effectively
    // no drift after the first click.
    startToneJS().then(() => {
      const baseTime = nowTone();
      for (let i = 0; i < n; i++) {
        const note = plannedNotes[i];
        const onset = onsets[i];
        const dur = durations[i];
        trigger(note, baseTime + onset, dur);
        setTimeout(() => $note.set(note), onset * 1000);
      }
    });

    return { onsets, total };
  };
};

/* ----------------------------- Variants ----------------------------- */

// A. Original — amtriangle + distortion + reverb, buzzy low register.
const buildCurrent: Variant["build"] = ({ rhythm, beat }) => {
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

  return makePlayer(
    notes,
    (note, time, dur) => synth.triggerAttackRelease(note, dur, time),
    rhythm,
    beat,
  );
};

// B. Mothership — bell-like FM, C-major register, spacious reverb.
const buildMothership: Variant["build"] = ({ rhythm, beat }) => {
  const notes = ["D4", "E4", "C4", "C3", "G3"];
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

  return makePlayer(
    notes,
    (note, time, dur) => synth.triggerAttackRelease(note, dur, time),
    rhythm,
    beat,
  );
};

// C. Tubular — PolySynth with triangle, lush hall reverb.
const buildTubular: Variant["build"] = ({ rhythm, beat }) => {
  const notes = ["A4", "B4", "G4", "G3", "D4"];
  const poly = new PolySynth(Synth, {
    oscillator: { type: "triangle" },
    envelope: { attack: 0.01, decay: 0.6, sustain: 0.3, release: 2.5 },
  });
  const filter = new Filter({ frequency: 3800, type: "lowpass", rolloff: -12 });
  const reverb = new Reverb({ decay: 5, wet: 0.55 }).toDestination();
  poly.chain(filter, reverb);

  return makePlayer(
    notes,
    (note, time, dur) => poly.triggerAttackRelease(note, dur, time),
    rhythm,
    beat,
  );
};

// D. ARP 2500 — detuned triangle stack with chorus, homage to the film.
const buildArp2500: Variant["build"] = ({ rhythm, beat }) => {
  const notes = ["D4", "E4", "C4", "C3", "G3"];
  const poly = new PolySynth(Synth, {
    oscillator: { type: "fattriangle", count: 3, spread: 30 } as any,
    envelope: { attack: 0.02, decay: 0.25, sustain: 0.7, release: 1.6 },
    portamento: 0.02,
  });
  const chorus = new Chorus({ frequency: 0.8, delayTime: 3.5, depth: 0.6, wet: 0.6 }).start();
  const reverb = new Reverb({ decay: 3.5, wet: 0.45 });
  poly.chain(chorus, reverb);
  reverb.toDestination();

  return makePlayer(
    notes,
    (note, time, dur) => poly.triggerAttackRelease(note, dur, time),
    rhythm,
    beat,
  );
};

// E. Pure — simple sine, minimal effects, mid register.
const buildPure: Variant["build"] = ({ rhythm, beat }) => {
  const notes = ["A3", "B3", "G3", "G2", "D3"];
  const synth = new Synth({
    oscillator: { type: "sine" },
    envelope: { attack: 0.005, decay: 0.4, sustain: 0.2, release: 1.4 },
  });
  const reverb = new Reverb({ decay: 2.5, wet: 0.4 }).toDestination();
  synth.connect(reverb);
  synth.toDestination();

  return makePlayer(
    notes,
    (note, time, dur) => synth.triggerAttackRelease(note, dur, time),
    rhythm,
    beat,
  );
};

// F. Celesta — twinkly FM with short reverb.
const buildCelesta: Variant["build"] = ({ rhythm, beat }) => {
  const notes = ["A4", "B4", "G4", "G3", "D4"];
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

  return makePlayer(
    notes,
    (note, time, dur) => synth.triggerAttackRelease(note, dur, time),
    rhythm,
    beat,
  );
};

/* --------------------------- Registry --------------------------- */

export const VARIANTS: Variant[] = [
  {
    id: "mothership",
    name: "Mothership",
    blurb: "FM bell, C major, spacious reverb",
    beat: 0.13,
    rhythm: CLASSIC_RHYTHM,
    build: buildMothership,
  },
  {
    id: "tubular",
    name: "Tubular",
    blurb: "Polyphonic triangle, lush hall",
    beat: 0.12,
    rhythm: CLASSIC_RHYTHM,
    build: buildTubular,
  },
  {
    id: "arp2500",
    name: "ARP 2500",
    blurb: "Detuned triangle stack, chorus, film homage",
    beat: 0.15,
    rhythm: CLASSIC_RHYTHM,
    build: buildArp2500,
  },
  {
    id: "celesta",
    name: "Celesta",
    blurb: "FM sparkle, G major",
    beat: 0.11,
    rhythm: CLASSIC_RHYTHM,
    build: buildCelesta,
  },
  {
    id: "pure",
    name: "Pure",
    blurb: "Clean sine, low register",
    beat: 0.12,
    rhythm: CLASSIC_RHYTHM,
    build: buildPure,
  },
  {
    id: "current",
    name: "Original",
    blurb: "Buzzy low-octave, flat rhythm",
    beat: 0.1,
    rhythm: [1, 1, 1, 1, 1],
    build: buildCurrent,
  },
];

export const DEFAULT_VARIANT: VariantId = "mothership";

export const getVariant = (id: VariantId): Variant =>
  VARIANTS.find((x) => x.id === id) ?? VARIANTS[0];

export const synth = (variant: VariantId = DEFAULT_VARIANT): PlayFn => {
  const v = getVariant(variant);
  return v.build({ rhythm: v.rhythm, beat: v.beat });
};
