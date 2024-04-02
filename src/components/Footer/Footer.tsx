import * as React from "react";
import Logo from "@/components/Logo";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
          {/*
            NOTE: If you'd like to build your blog on top
            of this code, the license requires that you leave
            this paragraph untouched. Check out LICENSE.md
            for more information.
          */}
          <p className={styles.attribution}>
            Blog template created by{" "}
            <a href="https://www.joshwcomeau.com/">Josh W. Comeau</a>. Check out{" "}
            <a href="https://www.joyofreact.com/">The Joy of React</a> to learn
            how to build dynamic React apps like this one!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
