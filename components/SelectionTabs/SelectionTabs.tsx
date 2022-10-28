import React from "react";
import styles from "./SelectionTabs.module.scss";

interface SelectionTabsProps {
  titles: ("Resources" | "Requests" | "Users")[];
  selector: (e: "Resources" | "Requests" | "Users") => void;
  selected: "Resources" | "Requests" | "Users";
}

export const SelectionTabs: React.FC<SelectionTabsProps> = ({
  titles,
  selector,
  selected,
}) => {
  return (
    <div className={styles.tabContainer}>
      {titles?.map((label, index) => {
        return (
          <div
            className={label === selected ? styles.selectedTab : styles.tab}
            key={index}
            onClick={() => selector(label)}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};
