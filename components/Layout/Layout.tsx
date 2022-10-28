import React from "react";
import { Navbar } from "../../components";
import styles from "./Layout.module.scss";
interface LayoutProps {
  children?: React.ReactNode;
  showAddButton?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showAddButton = true,
}) => {
  return (
    <main>
      <Navbar showAddButton={showAddButton} />
      <section className={styles.layout}>{children}</section>
    </main>
  );
};
