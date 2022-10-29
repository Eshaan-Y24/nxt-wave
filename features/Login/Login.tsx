import React from "react";
import { LoginForm, PageSection } from "../../components";
import styles from "./Login.module.scss";
export const Login = () => {
  return (
    <PageSection>
      <div className={styles.loginWrapper}>
        <div className={styles.loginTextWrapper}>
          <h1>
            Welcome to <img src="/assets/logo.png" alt="" />
          </h1>
          <p>We missed you! It&apos;s great to have you back!</p>
        </div>
        <div className={styles.loginFormContainer}>
          <LoginForm />
        </div>
      </div>
    </PageSection>
  );
};
