declare module "https://ficus.io/widget.js" {
  type Answer = {
    id: string;
    color: string;
    label: string;
  };

  type Config = {
    question: string;
    url?: string;
    answers: Answer[];
  };

  type Vote = {
    id: string;
    answer?: string;
    answers?: string[];
  };

  type PollOptions = {
    type: string;
    config: Config;
    votes?: Vote[];
    theme?: {
      textColor?: string;
      backgroundColor?: string;
      font?: string;
      aspectRatio?: string;
    };
  };

  type UpdateFunction = (options: { votes: Vote[] }) => void;
  type UnmountFunction = () => void;

  export function createPoll(
    rootElement: HTMLElement,
    options: PollOptions,
  ): [UpdateFunction, UnmountFunction];
}
