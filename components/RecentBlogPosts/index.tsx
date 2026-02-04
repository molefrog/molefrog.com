import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import fffIcon from "@/public/images/fff-icon.png";

export const RecentBlogPosts = () => {
  return (
    <div>
      <h2 className="text-base font-mono uppercase text-ds-gray-400 mb-2">Recent posts</h2>

      <div className="border-t border-ds-gray-100">
        <BlogPost
          title="React Tricks: Fast, Fit and Fun"
          date={new Date("2023-12-19T00:00:00.000Z")}
          icon={fffIcon}
          link="/notes/react-tricks"
        />
      </div>
    </div>
  );
};

interface BlogPostProps {
  title: string;
  date: Date;
  icon: StaticImageData;
  link: string;
}

const BlogPost = ({ title, date, icon, link }: BlogPostProps) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={link}
      prefetch
      className="group flex flex-row flex-nowrap items-start gap-x-7 py-2.5 md:py-4 border-b border-ds-gray-100 no-underline text-inherit"
    >
      <Image
        src={icon}
        className="-rotate-2 drop-shadow-[0px_1px_4px_rgba(0,0,0,0.05)] mt-0.5 transition-all group-hover:rotate-2 group-hover:scale-110 group-hover:drop-shadow-[0px_3px_6px_rgba(0,0,0,0.1)]"
        alt="blog post icon"
        width={26}
        height={26}
      />
      <div className="flex-1 group-hover:underline">{title}</div>
      <div className="min-w-[100px] text-ds-gray-400">{formattedDate}</div>
    </Link>
  );
};
