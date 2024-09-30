import { Synth, now as nowTone } from "tone";

/*
    .-=-.
 .-' . . '-.
 https://www.ars-nova.com/Theory%20Q&A/Q35.html
*/

const notes = ["G2", "A2", "F2", "F1", "C1"];

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
  }).toDestination();

  let offset = 0;

  return (n = 3) => {
    const delay = 0.15;

    for (let i = 0; i < n; i++) {
      const index = (offset + i) % notes.length;
      const note = notes[index];
      synth.triggerAttackRelease(note, "16n", nowTone() + i * delay);
    }

    offset = (offset + n - 1) % notes.length;
  };
};
