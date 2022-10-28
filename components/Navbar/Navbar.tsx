import Image from "next/image";
import React from "react";
import dummy from "../../data/dummy.json";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img
        className={styles.logo}
        src="/assets/logo.png"
        alt=""
        height={40}
        width={82}
      />
      <div className={styles.options}>
        <button className={styles.addItem}>Add Item</button>
        <img src="/assets/user.png" alt="" className={styles.avatar} />
      </div>
    </nav>
  );
};
