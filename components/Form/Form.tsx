import React from "react";
import styles from "./Form.module.scss";

export const Form = () => {
  return (
    <form className={styles.formWrapper}>
      <h1>Item Details</h1>
      <label htmlFor="">ITEM NAME</label>
      <input type="text" title="item name" />
      <label htmlFor="">LINK</label>
      <input type="text" title="link" />
      <label htmlFor="">RESOURCE NAME</label>
      <input type="text" title="resource name" />
      <label htmlFor="">DESCRIPTION</label>
      <textarea title="description" />
      <button type="submit" onClick={(e) => e.preventDefault}>
        CREATE
      </button>
    </form>
  );
};
