import * as React from "react";

function Card({ children, ...delegated }) {
  return (
    <div {...delegated}>
      {children}
    </div>
  );
}

export default Card;
