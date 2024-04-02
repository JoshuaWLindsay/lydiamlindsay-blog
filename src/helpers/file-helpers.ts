import React from "react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

interface BlogPost {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
}

export async function getBlogPostList() {
  const fileNames = await readDirectory("/content");

  const blogPosts: BlogPost[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    const blogPost: BlogPost = {
      slug: fileName.replace(".mdx", ""),
      title: frontmatter.title,
      abstract: frontmatter.abstract,
      publishedOn: frontmatter.publishedOn,
    }

    blogPosts.push(blogPost);
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export const loadBlogPost = React.cache(async function loadBlogPost(slug: string) {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
