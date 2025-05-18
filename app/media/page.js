import { Container } from "@/components/Grid";

export default function Media() {
  return (
    <main>
      <Container placement="inner">
        <h2 className="page-header__header">Media Mentions and Publications</h2>
        <div className="page-header__text">
          Here is a <i>&quot;humble&quot;</i> list of the articles me or my projects have been
          mentioned in, the podcasts I&apos;ve joined as a guest, or some articles I&apos;ve written
          over the years.
        </div>

        <ol className="references">
          {REFERENCES.map(({ title, url, details }, idx_) => {
            return (
              <li key={idx_} className="references__item">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="references__link"
                >
                  {title}
                </a>
                <div className="references__details">{details}</div>
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
const REFERENCES = [
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
