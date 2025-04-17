import React from "react";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  slug,
}: Props) {
  return (
    <div className="flex flex-column">

      <div className="flexl flex-row">
          <CoverImage slug={slug} title={title} src={coverImage} />
        <h3 className="text-3xl mb-3 leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
      </div>


      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
