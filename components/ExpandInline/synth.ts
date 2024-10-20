import { Distortion, Reverb, Synth, now as nowTone, start as startToneJS } from "tone";
import { $note } from "./SolfegeHands"; // Import the $note atom

/*
    .-=-.
 .-' . . '-.
 https://www.ars-nova.com/Theory%20Q&A/Q35.html
*/

const notes = ["G3", "A3", "F3", "F2", "C2"];

export const synth = () => {
  const synth = new Synth({
    oscillator: {
      type: "amtriangle",
      harmonicity: 0.5,
      modulationType: "sine",
    },
    envelope: {
      attackCurve: "exponential",
      attack: 0.05,
      decay: 0.2,
      sustain: 0.2,
      release: 1.5,
    },
    portamento: 0.05,
  });

  const reverb = new Reverb({
    decay: 1,
  }).toDestination();

  const dist = new Distortion({
    distortion: 1,
  }).toDestination();

  synth.connect(reverb).connect(dist);
  synth.toDestination();

  let offset = 0;

  return async (n = 3) => {
    await startToneJS();

    const delay = 0.15;

    for (let i = 0; i < n; i++) {
      const index = (offset + i) % notes.length;
      const note = notes[index];
      const playTime = nowTone() + i * delay;

      // Schedule note playing
      synth.triggerAttackRelease(note, "16n", playTime);

      // Schedule $note atom update
      setTimeout(
        () => {
          $note.set(note);
        },
        i * delay * 1000,
      );
    }

    offset = (offset + n) % notes.length;
  };
};
