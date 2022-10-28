import React from "react";
import styles from "./SelectionTabs.module.scss";

interface SelectionTabsProps {
  titles: {
    label: "Resources" | "Requests" | "Users";
    value: "resource" | "request" | "user";
  }[];
  selector: (e: "resource" | "request" | "user") => void;
  selected: "resource" | "request" | "user";
}

export const SelectionTabs: React.FC<SelectionTabsProps> = ({
  titles,
  selector,
  selected,
}) => {
  return (
    <div className={styles.tabContainer}>
      {titles?.map((item, index) => {
        return (
          <div
            className={
              item.value === selected ? styles.selectedTab : styles.tab
            }
            key={index}
            onClick={() => selector(item.value)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};
