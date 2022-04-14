import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import realMadrid from "../images/Real-Madrids.jpg";

class Cards extends Component {
  render() {
    return (
      <>
        <h2 className={styles.h2}>News</h2>
        <div className={styles.container}>
          <Card images={realMadrid} title="Real Madrid win against Chelsea" />
          <Card images={realMadrid} title="Real Madrid win against Chelsea" />
          <Card images={realMadrid} title="Real Madrid win against Chelsea" />
          <Card images={realMadrid} title="Real Madrid win against Chelsea" />
        </div>
      </>
    );
  }
}

export default Cards;
