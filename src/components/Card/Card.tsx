import * as React from "react";
import clsx from 'clsx';
import styles from "./Card.module.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className, ...delegated }: CardProps) {
  return (
    <div className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </div>
  );
}

export default Card;
