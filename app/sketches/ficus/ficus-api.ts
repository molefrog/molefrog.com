import type { Config } from "https://classic.ficus.io/widget.js";

export namespace API {
  interface PollStateVote {
    id: string;
    answers: string[];
  }

  interface FetchedConfig extends Config {
    id: string;
    name: string;
  }

  export type PollState = {
    config: FetchedConfig;
    me: { id: string; answers: string[] };
    votes: PollStateVote[];
  };
}
