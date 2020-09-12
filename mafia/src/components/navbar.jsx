import React, { Component } from "react";
import styles from "../css/navbar.module.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className={styles.bigblue}>Mafia</span>
      </a>
    </nav>
  );
};

export default NavBar;
