import React from "react";
import { getYear, format } from "date-fns";
import { Metadata } from "next";
import { Container } from "@/components/Container";
import Link from "next/link";
import { Back as BackIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "All Speaking Engagements | molefrog",
  description: "Complete chronological list of conference talks and presentations",
};

interface Talk {
  title: string;
  conference: string;
  city: string;
  country: string;
  flag: string;
  date: string;
  year?: number;
}

const talks: Talk[] = [
  {
    title: "The challenges of web apps: what we've solved and what's next?",
    conference: "CopenhagenJS",
    city: "Copenhagen",
    country: "Denmark",
    flag: "🇩🇰",
    date: "2024-05-12",
  },
  {
    title: "The challenges of web apps: what we've solved and what's next?",
    conference: "JSConf.JP",
    city: "Tokyo",
    country: "JP",
    flag: "🇯🇵",
    date: "2024-11-23",
  },
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

export default function SpeakingAll(): JSX.Element {
  let currentYear: number | null = null;

  return (
    <Container placement="inner">
      <div className="text-sm text-ds-gray-900 pb-24 md:pb-32">
        {/* Nav */}
        <div className="flex mb-4">
          <Link
            href="/speaking"
            className="bg-ds-gray-50 px-4 rounded-full h-9 align-middle items-center shadow-[inset_0px_0px_0px_1px_var(--color-ds-gray-200)] text-ds-gray-600 no-underline transition-shadow text-sm font-medium inline-flex gap-2 cursor-pointer hover:text-ds-accent hover:shadow-[inset_0px_0px_0px_2px_var(--color-ds-accent)] [&>svg]:text-ds-gray-800 [&>svg]:mt-px hover:[&>svg]:text-ds-accent"
          >
            <BackIcon /> Back to Talks
          </Link>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <tbody>
            {talks.map((talk, index) => {
              const talkYear = getYear(new Date(talk.date));
              talk.year = talkYear;

              const isNewYear = talk.year !== currentYear;
              currentYear = talk.year;

              const formattedDate = format(new Date(talk.date), "MM-yyyy");

              return (
                <React.Fragment key={index}>
                  <tr className="[&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:border-ds-gray-150">
                    <td
                      className="py-3.5 text-left align-top text-ds-gray-400 font-ds-mono text-sm font-normal"
                      colSpan={3}
                    >
                      {isNewYear ? talk.year : null}
                    </td>

                    <td className="py-3.5 px-3 align-top">
                      <div className="mb-1">
                        {talk.title}
                        <div className="text-ds-gray-500 mt-1 font-normal">
                          {talk.flag} {talk.conference}, {talk.city}
                        </div>
                      </div>
                    </td>
                    <td className="text-right align-top py-3.5 font-ds-mono text-sm text-ds-gray-400 whitespace-nowrap font-normal">
                      {formattedDate}
                    </td>
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
