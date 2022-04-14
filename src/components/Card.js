import React, { Component } from "react";
import styles from "./Card.module.css";

class Card extends Component {
  render() {
    const { images, title } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={images} alt="photo-image" />
          <h3>{title}</h3>
        </div>
      </div>
    );
  }
}

export default Card;
