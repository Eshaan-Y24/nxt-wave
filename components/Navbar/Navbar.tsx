import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

interface NavbarProp {
  showAddButton: boolean;
}

export const Navbar: React.FC<NavbarProp> = ({ showAddButton }) => {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <img
          className={styles.logo}
          src="/assets/logo.png"
          alt=""
          height={40}
          width={82}
        />
      </Link>
      <div className={styles.options}>
        {showAddButton ? (
          <Link href={"/add-item"}>
            <button className={styles.addItem}>Add Item</button>
          </Link>
        ) : null}
        <img src="/assets/user.png" alt="" className={styles.avatar} />
      </div>
    </nav>
  );
};
