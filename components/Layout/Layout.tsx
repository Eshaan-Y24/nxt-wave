import React from "react";
import { Navbar } from "../../components";
import styles from "./Layout.module.scss";
interface LayoutProps {
  children?: React.ReactNode;
  showAddButton?: boolean;
  hideAvatar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showAddButton = true,
  hideAvatar = false,
}) => {
  return (
    <main>
      <Navbar showAddButton={showAddButton} hideAvatar={hideAvatar} />
      <section className={styles.layout}>{children}</section>
    </main>
  );
};
