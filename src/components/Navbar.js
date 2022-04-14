import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.jpeg";
import menu from "../images/menu.png";
const Navbar = () => {
  return (
    <header className={styles.bgdark}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <img src={logo} alt="profile" className={styles.logo} />
          <div>
            <img src={menu} alt="menu" className={styles.menu} />
          </div>
          <li className={styles.listItem}>Images</li>
          <li className={styles.listItem}>Gmail</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
