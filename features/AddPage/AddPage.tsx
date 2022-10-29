import React, { useState } from "react";
import { CustomImage, Form, Layout, PageSection } from "../../components";
import styles from "./AddPage.module.scss";
export const AddPage = () => {
  return (
    <section>
      <div className={styles.addWrapper}>
        <div className={styles.formWrapper}>
          <Form />
        </div>
        <CustomImage
          src="/assets/pageImage.png"
          className={styles.pageImage}
          alt=""
        />
      </div>
    </section>
  );
};
