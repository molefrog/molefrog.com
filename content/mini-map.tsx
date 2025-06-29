import dateParseThumbImg from "@/public/showcase/date-parse-thumb.webp";
import dateParseImg from "@/public/showcase/date-parse.webp";
import dirtyAnimationsThumbImg from "@/public/showcase/dirty-animations-thumb.gif";
import dirtyAnimationsVideo from "@/public/showcase/dirty-animations.mp4";
import ficusVideo from "@/public/showcase/ficus-stars.mp4";
import ficusThumbImg from "@/public/showcase/ficus-thumb.webp";
import fttThumbImg from "@/public/showcase/ftt-thumb.webp";
import fttVideo from "@/public/showcase/ftt.mp4";
import jsthingsThumbImg from "@/public/showcase/js-things-thumb.gif";
import jsthingsVideo from "@/public/showcase/js-things.mp4";
import kaleidoscopeThumbImg from "@/public/showcase/kaleidoscope-thumb.gif";
import kaleidoscopeVideo from "@/public/showcase/kaleidoscope.mp4";
import laxlabsThumbImg from "@/public/showcase/laxlabs-thumb.webp";
import laxlabsVideo from "@/public/showcase/laxlabs.mp4";
import piddnVideo from "@/public/showcase/pidnn-talk.mp4";
import pidnnThumbImg from "@/public/showcase/pidnn-thumb.jpg";
import pplaworkThumbImg from "@/public/showcase/pplawork-thumb.webp";
import pplaworkImg from "@/public/showcase/pplawork.webp";
import railsFrontendImg from "@/public/showcase/rails-frontend.webp";
import railsFrontendThumbImg from "@/public/showcase/rails-webpack-thumb.jpg";
import reactTricksThumbImg from "@/public/showcase/react-tricks-thumb.webp";
import reduxActuatorThumbImg from "@/public/showcase/redux-actuator-thumb.gif";
import reduxActuatorImg from "@/public/showcase/redux-actuator.gif";
import resumeVideo from "@/public/showcase/resume-io-builder-v1.mp4";
import resumeThumbImg from "@/public/showcase/resume-thumb.gif";
import ryeThumbImg from "@/public/showcase/rye-thumb.gif";
import ryeVideo from "@/public/showcase/rye.mp4";
import smartomatoThumbImg from "@/public/showcase/smartomato-thumb.webp";
import smartomatoVideo from "@/public/showcase/smartomato.mp4";
import spoiledThumbImg from "@/public/showcase/spoiled-thumb.gif";
import spoiledVideo from "@/public/showcase/spoiled.mp4";
import theseGuysThumbImg from "@/public/showcase/these-guys-thumb.webp";
import theseGuysVideo from "@/public/showcase/these-guys.mp4";
import unhashThumbImg from "@/public/showcase/unhash-thumb.webp";
import unhashVideo from "@/public/showcase/unhash.mp4";
import useLeaderThumbImg from "@/public/showcase/use-leader-thumb.webp";
import useLeaderImg from "@/public/showcase/use-leader.webp";
import wultraThumbImg from "@/public/showcase/wultra-thumb.webp";
import wultraImg from "@/public/showcase/wultra.webp";
import reactTricksVideo from "@/public/speaking/multiplayer-demo.mp4";
import riddlemethisVideo from "@/public/showcase/riddlemethis.mp4";
import riddlemethisThumbImg from "@/public/showcase/riddlemethis-thumb.gif";

import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";

type ImageSrc = ComponentProps<typeof Image>["src"];

// Helper function to extract URL from ImageSrc (handles both strings and StaticImageData)
export const getImageUrl = (src: ImageSrc): string => {
  return typeof src === "string" ? src : (src as StaticImageData).src;
};

type Resource = { image: ImageSrc } | { video: string };

type Project = Resource & {
  thumb: ImageSrc;
  aspectRatio?: number;
  description?: string;
  tags?: string | string[];
  url: string;
};

const projects: Project[] = [
  {
    thumb: riddlemethisThumbImg,
    video: riddlemethisVideo,
    aspectRatio: 1114 / 720,
    description:
      "Crafted (code+design) a social game for guessing the prompt of an AI generated image. Runs on a real-time stable diffusion API.",
    tags: ["2024", "Gen AI"],
    url: "https://riddlemethis.com",
  },
  {
    thumb: spoiledThumbImg,
    video: spoiledVideo,
    aspectRatio: 3 / 2,
    description:
      "Spoiled: spoiler component that recreates particle animation used in Telegram messenger. Powered by CSS Paint API.",
    tags: ["2024", "React", "Exp"],
    url: "https://spoiled.vercel.app",
  },
  {
    thumb: reactTricksThumbImg,
    video: reactTricksVideo,
    aspectRatio: 16 / 9,
    description: "React Tricks: Fast, Fit and Fun!",
    tags: ["2023", "React", "Speaking"],
    url: "/notes/react-tricks",
  },
  {
    thumb: useLeaderThumbImg,
    image: useLeaderImg,
    description:
      "Experimental library for primary tab detection that uses `BroadcastChannel` and distributed leader election. Not to be used in production!",
    tags: ["2023", "React", "Exp"],
    url: "https://use-leader.surge.sh",
  },

  {
    thumb: unhashThumbImg,
    video: unhashVideo,
    description:
      "Unhash is a Web3 app that allows you to buy and manage ENS names. I launched this app with a partner and worked on the branding, UI design, and front-end development.",
    tags: ["2023", "Web3", "UI"],
    url: "https://unhash.com",
  },

  {
    thumb: wultraThumbImg,
    image: wultraImg,
    description: "Demo app that shows how wouter can be used with Ultra.js, a Deno framework.",
    tags: ["2023", "Deno", "React"],
    url: "https://wultra.deno.dev/",
  },

  {
    thumb: pplaworkThumbImg,
    image: pplaworkImg,
    description:
      "$PPLAWORK – an NFT photo series that documents the lives of people at work. Featuring the film photos I captured during my travels.",
    tags: ["2023", "NFT"],
    url: "https://sloika.xyz/mlfrg.eth/people-at-work",
  },

  {
    thumb: dirtyAnimationsThumbImg,
    video: dirtyAnimationsVideo,
    tags: "2018",
    aspectRatio: 16 / 9,
    description:
      "'Animations in a Stateful World' is an interactive presentation I made for my HolyJS'2018 talk. It highlights principles of making fluid and stateful animations in React.",
    url: "https://molefrog.com/etc/stateful-animations/",
  },

  {
    thumb: resumeThumbImg,
    video: resumeVideo,
    description:
      "The first version of resume.io was launched in 2016 as a simple MVP built with Rails. By 2018, I had been working on it full-time, handling both backend and frontend work. I was personally responsible for rolling out the next version of the editor.",
    tags: ["2018"],
    url: "https://resume.io/?ref=mlfrg",
  },

  {
    thumb: ficusThumbImg,
    video: ficusVideo,
    description:
      "I designed and developed real-time polls for ficus.io, an online presentation app that my friends and I built during a hackathon. The polls were built with React, D3, and React and Canvas API. The app won several awards and received funding from a local accelerator and Microsoft.",
    tags: ["startup", "2014–2018"],
    url: "https://ficus.io",
  },

  {
    thumb: reduxActuatorThumbImg,
    image: reduxActuatorImg,
    aspectRatio: 16 / 9,
    description:
      "Redux middleware to trigger imperative effects using pure state updates. No longer maintained.",
    tags: ["2017", "OSS", "React"],
    url: "https://github.com/molefrog/redux-actuator",
  },

  {
    thumb: laxlabsThumbImg,
    video: laxlabsVideo,
    tags: ["2017"],
    description:
      "Client work. I designed and coded the prototype of a Lacrosse drill diagram editor using Rails, React.js, react-motion and SVG.",
    url: "https://www.lacrosselabs.io/",
  },

  {
    thumb: fttThumbImg,
    video: fttVideo,
    tags: ["2017", "Hackathon"],
    description:
      "A budgeting app concept, developed during a hackathon. It was acclaimed by the jury and was named the best app prototype for personal financing.",
    url: "https://github.com/molefrog/ftt",
  },

  {
    thumb: theseGuysThumbImg,
    video: theseGuysVideo,
    description:
      "I created an Easter egg demo where you could interact with flying particles. To animate these particles, I experimented with the bird flocking algorithm.",
    tags: ["2017"],
    url: "https://molefrog.com/etc/stateful-animations/#11",
  },

  {
    thumb: railsFrontendThumbImg,
    image: railsFrontendImg,
    description:
      'My talk "Give a Second Chance to Rails Frontend" presented at the Rails Club 2016 conf, was dedicated to using modern bundlers, particularly Webpack, with Ruby on Rails 4.2',
    aspectRatio: 16 / 9,
    tags: ["2016", "Rails", "Speaking"],
    url: "https://speakerdeck.com/molefrog/give-a-second-change-to-rails-frontend",
  },

  {
    thumb: dateParseThumbImg,
    image: dateParseImg,
    url: "https://medium.com/@mlfrg/rules-of-parsing-dates-with-date-parse-c5a73525a72e",
  },

  {
    thumb: smartomatoThumbImg,
    video: smartomatoVideo,
    tags: ["2014–2016"],
    description:
      "I worked as a lead full-stack developer for Smartomato, a food delivery startup, where I maintained the Ember.js SPA and the Rails backend.",
    url: "https://smartomato.ru",
  },

  {
    thumb: jsthingsThumbImg,
    video: jsthingsVideo,
    aspectRatio: 1,
    tags: ["2014", "node.js"],
    description:
      "I built an experimental network of printers for printing Instagram photos in real-time, using C++, Node.js and Raspberry Pi. You could see your photo being printed through a webcam connected to the Pi.",
    url: "https://github.com/molefrog/steviewhale",
  },

  {
    thumb: kaleidoscopeThumbImg,
    video: kaleidoscopeVideo,
    description: "Moving kaleidoscope effect rendered on HTML Canvas.",
    tags: ["2013"],
    url: "https://codepen.io/molefrog/pen/juBad",
  },

  {
    thumb: pidnnThumbImg,
    video: piddnVideo,
    description:
      "For the Learning Systems course, I did a presentation on the PID Neural Networks, using Deck.js and Tangle.js for draggable controls that affect the controller's performance.",
    tags: ["2013"],
    url: "https://molefrog.com/etc/pid-neural-network/",
  },

  {
    thumb: ryeThumbImg,
    video: ryeVideo,
    description:
      "Rye.js was my first open-source project. I wrote it in JavaScript while studying Abstract Algebra and Cryptography during my Bachelor's. ",
    tags: ["2012"],
    url: "https://molefrog.com/etc/rye-js/",
  },
];

export default projects;
