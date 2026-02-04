import { Container } from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Mentions and Publications",
  description: "Articles, podcasts, and publications featuring Alexey Taktarov and his projects",
};

interface Reference {
  title: string;
  url: string;
  details: string;
}

export default function Media(): JSX.Element {
  return (
    <main className="font-[family-name:var(--font-inter)] md:pb-32 pb-24">
      <Container placement="inner">
        <h2 className="text-2xl leading-10 md:text-3xl md:leading-12 font-medium font-serif tracking-tight mb-4 mt-4">
          Media Mentions and Publications
        </h2>
        <div className="text-base md:text-ds-md mb-16 text-ds-gray-800">
          Here is a <i>&quot;humble&quot;</i> list of the articles I or my projects have been
          mentioned in, the podcasts I&apos;ve joined as a guest, or some articles I&apos;ve written
          over the years.
        </div>

        <ol className="p-0 list-[decimal-leading-zero] marker:font-ds-mono marker:text-ds-gray-400 marker:text-sm marker:font-medium">
          {REFERENCES.map(({ title, url, details }, idx_) => {
            return (
              <li key={idx_} className="pl-3 -ml-3 mt-0 first:mt-0 [&+li]:mt-8">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ds-gray-800 italic block underline decoration-ds-gray-300 hover:decoration-ds-accent hover:decoration-2"
                >
                  <span className="before:content-['«'] after:content-['»']">{title}</span>
                </a>
                <div className="mt-1 text-sm text-ds-gray-700 font-normal">{details}</div>
              </li>
            );
          })}
        </ol>
      </Container>
    </main>
  );
}

/**
 * The list of publications, articles, podcasts
 */
const REFERENCES: Reference[] = [
  {
    title: "Fira: Agentic AI Analyst",
    url: "https://www.ycombinator.com/launches/Mu8-fira-agentic-ai-analyst",
    details: "YC Launch announcement, Y Combinator W25, 2025",
  },
  {
    title: "Resume.io and Talent Inc. merge!",
    url: "https://updates.resume.io/resume-io-and-talent-inc-merge!-203399",
    details: "Resume.io acquisition announcement / PR Newsware, 2021",
  },
  {
    title: "Alexey Taktarov – Speaker Info",
    url: "https://github.com/Semigradsky/events/blob/master/speakers/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9%20%D0%A2%D0%B0%D0%BA%D1%82%D0%B0%D1%80%D0%BE%D0%B2.md",
    details: "Frontend events, talks, meetups / GitHub repo, 2021",
  },
  {
    title: "Сломанный проектор, мечта кремниевой долины и бассейн с акулами",
    url: "https://podcasts.apple.com/at/podcast/%D1%82%D0%B8%D1%85%D0%BE%D0%BD-%D0%B1%D0%B5%D0%BB%D0%BE%D1%83%D1%81%D1%8C%D0%BA%D0%BE-%D0%B8-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%82%D0%B0%D0%BA%D1%82%D0%B0%D1%80%D0%BE%D0%B2-resume-io-%D1%81%D0%BB%D0%BE%D0%BC%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9/id1440279665",
    details: "Podcast «Это Провал», 2021",
  },
  {
    title: "Как устроиться на работу? Правила хорошего резюме от сооснователей Resume.io",
    url: "https://proriv.simplecast.com/episodes/kak-ustroitsya-na-rabotu-YD7vCVsE",
    details: "Podcast «Прорыв», 2021",
  },
  {
    title: "Личный опыт: как выстроить культуру в компании и избежать текучки",
    url: "https://incrussia.ru/understand/company-culture/",
    details: "Inc., 2021",
  },
  {
    title:
      "Как изменить оргструктуру так, чтобы команды заработали по принципу самостоятельных продуктов...",
    url: "https://www.typical.company/kollaboracii/kak-izmenit-orgstrukturu-tak-chtoby-komandy-zarabotali-po-principu-samostoyatelnyh-produktov-kompaniya-mogla-legko-masshtabirovatsya-a-osnovateli-vyshli-iz-operacionki",
    details: "TYPICAL case study, 2021",
  },
  {
    title: "Design principles for engineers, Alexey Taktarov",
    url: "https://dou.ua/forums/topic/24187/",
    details: "South Conf conference lineup, 2020",
  },
  {
    title: "React.js Open Source for the Past Month (v.May 2019)",
    url: "https://medium.mybridge.co/react-js-open-source-for-the-past-month-v-may-2019-4b7a7a488833",
    details: "Wouter ranked #9 in the list of Top-10 projects of the month, 2019",
  },
  {
    title: "HOOK-ed Route, Micro Frontends at Scale & more",
    url: "https://www.meetup.com/React-Amsterdam/events/263200596/",
    details: "Presenting Wouter at React Amsterdam meetup, 2019",
  },
  {
    title: "React Kyiv meetup recordings",
    url: "https://dou.ua/forums/topic/24187/",
    details: "React Kyiv, 2018",
  },
  {
    title: "Анимации в мире состояний",
    url: "https://habr.com/ru/company/jugru/blog/354550/",
    details: "A transcript of my talk on Animations in React, Habr, 2018",
  },
  {
    title: "Топ-10: разбор лучших докладов HolyJS 2017 Moscow",
    url: "https://habr.com/ru/company/jugru/blog/350164/",
    details: "Animations in React featured as Top-10 talks of HolyJS Moscow, 2017",
  },
  {
    title: "Лучшие приложения хакатона Open Fights Codility и все, что мы о них думаем",
    url: "https://medium.com/@m.skorik/%D1%8F%D0%B1%D1%8E%D0%B7%D0%B0%D0%BB-%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D1%85%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD%D0%B0-open-fights-codility-%D0%B8-%D0%B2%D1%81%D0%B5-%D1%87%D1%82%D0%BE-%D0%BC%D1%8B-%D0%BE-%D0%BD%D0%B8%D1%85-%D0%B4%D1%83%D0%BC%D0%B0%D0%B5%D0%BC-ebfa53ef8f5",
    details: "Our banking app prototype won first place at the Codility hackathon, 2017",
  },
  {
    title:
      "Если идея становится настолько глупой, что вам за нее стыдно, — вы близки к цели — как я выигрываю хакатоны",
    url: "https://rb.ru/opinion/y-hacknul-hak/",
    details: "Article for RB, 2017",
  },
  {
    title: "RailsClub 2016: Интервью c Алексеем Тактаровым",
    url: "http://rubynoname.ru/posts/2016/S08E02.html",
    details: "Interview for RubyNoName podcast, 2016",
  },
  {
    title: "Rules of parsing dates with Date.parse",
    url: "https://medium.com/people-at-work/rules-of-parsing-dates-with-date-parse-c5a73525a72e",
    details: "Published in People at Work / Medium, 2016",
  },
  {
    title: "Победители программы УМНИК 2015 года",
    url: "https://www.iidf.ru/media/articles/fond/opredeleny-pervye-pobediteli-programmy-umnik-2015-goda-1/",
    details: "Hackathon project ficus.io received funding from IIDF, 2015",
  },
  {
    title: "A New Breed of Acumen Ping Pong Players",
    url: "http://www.acumen-language.org/2013/02/a-new-breed-of-acumen-ping-pong-players.html",
    details: "Acumen, 2013",
  },
];
