import React from "react";
import styles from "./Main.module.css";
import google from "../images/googlelogo.png";
import search from "../images/search.png";
import voice from "../images/voice.png";
const Main = () => {
  return (
    <main className={styles.main_container}>
      <div className={styles.google_wrapper}>
        <img alt="google logo" src={google} className={styles.google_logo} />
      </div>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input}
          type="search"
          placeholder="Search Google or type a URL"
        ></input>
        <img src={search} alt="search-logo" className={styles.search} />
        <img src={voice} alt="voice" className={styles.voice} />
      </div>
    </main>
  );
};

export default Main;
