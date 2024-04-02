import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/helpers/file-helpers";
import RespectMotionPreferences from "@/components/RespectMotionPreferences";

export default async function Home() {
  const blogPosts = await getBlogPostList();
  return (
    <RespectMotionPreferences>
      <div>
        <h1>Latest Content:</h1>

        {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
          <BlogSummaryCard
            key={slug}
            slug={slug}
            title={title}
            abstract={abstract}
            publishedOn={publishedOn}
          />
        ))}
      </div>
    </RespectMotionPreferences>
  );
}
