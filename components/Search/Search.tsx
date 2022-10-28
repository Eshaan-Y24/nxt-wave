import React from "react";
import { debounce } from "../../functions/utils";
import styles from "./Search.module.scss";

interface SearchProps {
  selector: (e: string) => void;
  selected: string;
}

export const Search: React.FC<SearchProps> = ({ selected, selector }) => {
  return (
    <div className={styles.searchWrapper}>
      <img src="/assets/search.svg" className={styles.searchIcon} alt="" />
      <input
        title="search"
        placeholder="Search"
        className={styles.searchBar}
        onChange={(e) => debounce(() => selector(e.target.value), 800)}
        // value={selected}
      />
    </div>
  );
};
