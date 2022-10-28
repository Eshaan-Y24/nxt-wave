import React from "react";
import styles from "./PageSection.module.scss";
interface PageSectionProps {
  children: React.ReactNode;
}

export const PageSection: React.FC<PageSectionProps> = ({ children }) => {
  return <section className={styles.pageSection}>{children}</section>;
};
