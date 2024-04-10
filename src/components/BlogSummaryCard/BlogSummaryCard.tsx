import * as React from "react";
import Link from "next/link";
import { format } from "date-fns";
import Card from "@/components/Card";
import styles from "./BlogSummaryCard.module.css";

interface BlogSummaryCardProps {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
}

function BlogSummaryCard({ slug, title, abstract, publishedOn }: BlogSummaryCardProps) {
  const href = `/${slug}`;
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <Card className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <time dateTime={publishedOn}>{humanizedDate}</time>
      <p>
        {abstract}{" "}
        <Link href={href} className={styles.continueReadingLink}>
          Continue reading...
        </Link>
      </p>
    </Card>
  );
}

export default BlogSummaryCard;
