import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerCont}>
      <h1>
        RPS Game
        <span>Rock, Paper, Scissor</span>
      </h1>
    </header>
  );
};

export default Header;
