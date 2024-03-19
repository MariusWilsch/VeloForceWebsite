import { blogPost } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import {
  IconFileBroken,
} from "@tabler/icons-react";
import Image from 'next/image'

export const revalidate = 60;

import { BentoGrid, BentoGridItem } from "./bentoGrid";

async function getData() {
  const query = `
      *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;

  const data = await client.fetch(query,);

  return data;
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

function BentoGridDemo({ blogs }: { blogs: blogPost[] }) {
  let imgUrl = ""

  return (
    <BentoGrid className="max-w-6xl mx-auto w-[85%] md:w-[95%] ">
      {blogs.map((item, i) => (
        imgUrl = urlFor(item.titleImage).url(),
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.smallDescription}
          header={<Image src={imgUrl} alt="Blog Title Image" width={600} height={400} />}
          icon={<IconFileBroken className="h-4 w-4 text-neutral-500" />}
          slug={`/blog/${item.currentSlug}`}
          imgUrl={imgUrl}
          className={i === 3 || i === 6 ? "md:col-span-2" : "md:aspect-[1]"}
        >
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
}

interface ContentProps {
  topper: string;
  title: string;
  text: string;
}

const Content: React.FC<ContentProps> = ({ topper, title, text }) => (
  <div className="flex flex-col items-center text-center my-10">
    <span className="cs-topper">{topper}</span>
    <h2 className="cs-title">{title}</h2>
    <p className="cs-text">{text}</p>
  </div>
);

const Blog = async () => {
  const data: blogPost[] = await getData()

  return (
    <div className="p-section">
      <Content topper="Blog" title="Learn more about us" text="The Bento Grid is a new way to display content in a grid format. It's perfect for showcasing a variety of content types, from blog posts to product listings." />
      <BentoGridDemo blogs={data} />
    </div>
  )
}

export default Blog