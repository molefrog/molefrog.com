export namespace API {
  interface PollStateVote {
    id: string;
    answers: string[];
  }

  interface FetchedConfig {
    id: string;
    name: string;
    question: string;
    answers: { id: string; label: string }[];
  }

  export type PollState = {
    config: FetchedConfig;
    me: { id: string; answers: string[] };
    votes: PollStateVote[];
  };
}
