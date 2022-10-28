import React from "react";
import { Navbar } from "../../components";
import styles from "./Layout.module.scss";
interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section className={styles.layout}>{children}</section>
    </main>
  );
};
