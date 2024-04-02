import * as React from "react";
import Link from "next/link";
import { format } from "date-fns";
import Card from "@/components/Card";

function BlogSummaryCard({ slug, title, abstract, publishedOn }) {
  const href = `/${slug}`;
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <Card>
      <Link prefetch={true} href={href}>
        {title}
      </Link>
      <time dateTime={publishedOn}>{humanizedDate}</time>
      <p>
        {abstract}{" "}
        <Link href={href}>
          Continue reading...
        </Link>
      </p>
    </Card>
  );
}

export default BlogSummaryCard;
