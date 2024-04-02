import * as React from "react";
import { format } from "date-fns";

function BlogHero({ title, publishedOn, ...delegated }) {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");
  return (
    <header {...delegated}>
      <div>
        <h1>{title}</h1>
        <p>
          Published on <time dateTime={publishedOn}>{humanizedDate}</time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
