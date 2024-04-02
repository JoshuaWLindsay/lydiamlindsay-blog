import * as React from "react";
import Logo from "@/components/Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />
    </header>
  );
}

export default Header;
