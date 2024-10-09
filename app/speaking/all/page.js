import React from "react";
import { getYear, format } from "date-fns";
import { Container } from "@/components/Grid";
import Link from "next/link";
import { BackIcon } from "../icons";

const talks = [
  {
    title: '"Spoiled": Leveraging CSS Paint API for Realistic Particle Animation',
    conference: "HelsinkiJS",
    city: "Helsinki",
    country: "FI",
    flag: "🇫🇮",
    date: "2024-10-09",
  },
  {
    title: "React Tricks: Fast, Fit and Fun",
    conference: "React Advanced London Meetup",
    city: "London",
    country: "UK",
    flag: "🇬🇧",
    date: "2024-09-19",
  },
  {
    title: '"Spoiled": Leveraging CSS Paint API for Realistic Particle Animation',
    conference: "BarcelonaJS",
    city: "Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    date: "2024-07-25",
  },
  {
    title: '"Spoiled": Leveraging CSS Paint API for Realistic Particle Animation',
    conference: "CopenhagenJS",
    city: "Copenhagen",
    country: "Denmark",
    flag: "🇩🇰",
    date: "2024-04-11",
  },
  {
    title: "React Tricks: Fast, Fit and Fun",
    conference: "Copenhagen React",
    city: "Copenhagen",
    country: "Denmark",
    flag: "🇩🇰",
    date: "2023-11-30",
  },
  {
    title: "React Hooks: Interactivity in Functional Components",
    conference: "SFU",
    city: "Online",
    country: "Russia",
    flag: "🇷🇺",
    date: "2021-11-17",
  },
  {
    title: "Practical Serverless and Edge Computing",
    conference: "HolyJS",
    city: "Online",
    country: "Russia",
    flag: "🇷🇺",
    date: "2021-04-22",
  },
  {
    title: "Practical Serverless and Edge Computing",
    conference: "TverIO Perf Meetup",
    city: "Online",
    country: "Russia",
    flag: "🇷🇺",
    date: "2021-01-21",
  },
  {
    title: "React Hooks: Interactivity in Functional Components",
    conference: "SFU",
    city: "Online",
    country: "Russia",
    flag: "🇷🇺",
    date: "2020-11-09",
  },
  {
    title: "Can Design Principles Help me Become a Better Software Engineer?",
    conference: "TverIO Design",
    city: "Tver",
    country: "Russia",
    flag: "🇷🇺",
    date: "2019-10-17",
  },
  {
    title: "Hooks in action: implementing a 1KB React router",
    conference: "React Amsterdam",
    city: "Amsterdam",
    country: "Netherlands",
    flag: "🇳🇱",
    date: "2019-08-14",
  },
  {
    title: "Hooks in action: implementing a 1KB React router",
    conference: "React Russia",
    city: "Moscow",
    country: "Russia",
    flag: "🇷🇺",
    date: "2019-06-22",
  },
  {
    title: "Can Design Principles Help me Become a Better Software Engineer?",
    conference: "SPB Frontend",
    city: "Saint Petersburg",
    country: "Russia",
    flag: "🇷🇺",
    date: "2019-03-05",
  },
  {
    title: "Can Design Principles Help me Become a Better Software Engineer?",
    conference: "SouthConf",
    city: "Rostov-on-Don",
    country: "Russia",
    flag: "🇷🇺",
    date: "2019-02-28",
  },
  {
    title: "Animations in a Stateful World",
    conference: "React Kyiv",
    city: "Kyiv",
    country: "Ukraine",
    flag: "🇺🇦",
    date: "2018-03-23",
  },
  {
    title: "Animations in a Stateful World",
    conference: "HolyJS",
    city: "Moscow",
    country: "Russia",
    flag: "🇷🇺",
    date: "2017-11-17",
  },
  {
    title: "Give a Second Chance to Rails Frontend!",
    conference: "Rails Meetup RND",
    city: "Rostov-on-Don",
    country: "Russia",
    flag: "🇷🇺",
    date: "2017-04-25",
  },
  {
    title: "Animations in a Stateful World",
    conference: "Krasnodar Dev Days",
    city: "Krasnodar",
    country: "Russia",
    flag: "🇷🇺",
    date: "2016-12-10",
  },

  {
    title: "Give a Second Chance to Rails Frontend!",
    conference: "Rails Club",
    city: "Moscow",
    country: "Russia",
    flag: "🇷🇺",
    date: "2016-10-22",
  },
  {
    title: "Got Milk? A Short Introduction to Node.js and Event-Driven Programming",
    conference: "WebDevClub, MMCS",
    city: "Rostov-on-Don",
    country: "Russia",
    flag: "🇷🇺",
    date: "2012-10-01",
  },
];

export default function SpeakingAll() {
  let currentYear = null;

  return (
    <Container placement="inner">
      <div className="speaking-all">
        <div className="speaking-all__nav">
          <Link href="/speaking" className="speaking__nav-btn">
            <BackIcon /> Back to Talks
          </Link>
        </div>

        <table className="speaking-all__table">
          <tbody>
            {talks.map((talk, index) => {
              const talkYear = getYear(new Date(talk.date));
              talk.year = talkYear;

              const isNewYear = talk.year !== currentYear;
              currentYear = talk.year;

              const formattedDate = format(new Date(talk.date), "MM-yyyy");

              return (
                <React.Fragment key={index}>
                  <tr className="speaking-all__talk-row">
                    <td className="speaking-all__year" colSpan="3">
                      {isNewYear ? talk.year : null}
                    </td>

                    <td className="speaking-all__title-cell">
                      <div className="speaking-all__title-with-icon">
                        {talk.title}
                        <div className="speaking-all__conference">
                          {talk.flag} {talk.conference}, {talk.city}
                        </div>
                      </div>
                    </td>
                    <td className="speaking-all__date-cell">{formattedDate}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
