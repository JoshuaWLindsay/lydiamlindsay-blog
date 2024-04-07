import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/, // Support both .md and .mdx files
});

/** @type {import('next').NextConfig} */
export default withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});
