import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./Navbar.module.scss";

interface NavbarProp {
  showAddButton: boolean;
  hideAvatar: boolean;
}

export const Navbar: React.FC<NavbarProp> = ({ showAddButton, hideAvatar }) => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const closeRef = useRef(null);
  const router = useRouter();

  useClickOutside(closeRef, () => {
    setShowProfileOptions(false);
  });

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authenticated");
      router.push("/login");
    }
  };

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
        {!hideAvatar && (
          <img
            src="/assets/user.png"
            alt=""
            className={styles.avatar}
            onClick={() => {
              setShowProfileOptions(true);
            }}
          />
        )}
      </div>

      {showProfileOptions && (
        <div ref={closeRef} className={styles.menuDrawer}>
          <ul>
            <li onClick={handleSignOut}>
              <img src="/assets/logout.svg" alt="" /> Sign Out
            </li>
            <Link href={"/add-item"}>
              <li>
                <img src="/assets/add-icon.svg" alt="" /> Add Item
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};
