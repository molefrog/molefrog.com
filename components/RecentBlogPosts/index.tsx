import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import fffIcon from "@/public/images/fff-icon.png";
import lidoIcon from "@/public/images/lido-icon.png";

export const RecentBlogPosts = () => {
  return (
    <div className="blog-posts">
      <h2 className="blog-posts__head">Recent posts</h2>

      <div className="blog-posts__list">
        <BlogPost
          title="React Tricks: Fast, Fit and Fun"
          date={new Date("2023-12-19T00:00:00.000Z")}
          icon={fffIcon}
          link="/notes/react-tricks"
        />

        <BlogPost
          title="User-Centered Liquid Staking: UX Audit of Lido.fi"
          date={new Date("2023-10-21T00:00:00.000Z")}
          icon={lidoIcon}
          link="/notes/lido-staking-widget-ux"
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

const BlogPost = (props: BlogPostProps) => {
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={props.link} prefetch className="blog-posts__post">
      <Image
        src={props.icon}
        className="blog-posts__icon"
        alt="blog post icon"
        width={26}
        height={26}
      />
      <div className="blog-posts__title">{props.title}</div>
      <div className="blog-posts__date">{formattedDate}</div>
    </Link>
  );
};
