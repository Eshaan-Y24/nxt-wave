import React from "react";

import styles from "./PageButtons.module.scss";

interface PageButtonProps {
  increment: (e: any) => void;
  decrement: (e: any) => void;
  page: [number, number];
  disableNext: boolean;
  disablePrev: boolean;
}

export const PageButtons: React.FC<PageButtonProps> = ({
  disableNext,
  disablePrev,
  increment,
  decrement,
  page,
}) => {
  return (
    <div className={styles.pageButtons}>
      <button
        disabled={page[0] === 0}
        className={page[0] === 0 ? styles.disabledButton : ""}
        onClick={decrement}
      >
        Back
      </button>
      <button
        disabled={disableNext}
        className={disableNext ? styles.disabledButton : ""}
        onClick={increment}
      >
        Next
      </button>
    </div>
  );
};
