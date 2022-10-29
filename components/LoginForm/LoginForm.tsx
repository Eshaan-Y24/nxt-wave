import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import {
  showToastMessage,
  ToastComponent,
} from "../ToastComponent/ToastComponent";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const router = useRouter();
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const userName = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let data = {
      username: userName?.current?.value,
      password: password?.current?.value,
    };
    if (!data.username || !data.password) {
      if (!data.username) setUsernameError(true);
      if (!data.password) setPasswordError(true);

      showToastMessage(
        "failure",
        "Empty Fields! Please fill the fields correctly"
      );
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "authenticated",
          userName.current?.value as string
        );
        console.log(localStorage.getItem("authenticated"));
        showToastMessage("success", "Loggin in...");
        setTimeout(() => router.push("/"), 2000);
      }
    }
  };
  return (
    <form className={styles.loginForm}>
      <h1>Login</h1>
      <label htmlFor="">Username</label>
      <input
        ref={userName}
        type="text"
        title="username"
        onChange={() => {
          if (userName.current?.value) setUsernameError(false);
        }}
      />
      <p
        className={
          usernameError && !userName.current?.value
            ? styles.errorMsgShow
            : styles.errorMsgHide
        }
      >
        Cannot be empty!
      </p>

      <label htmlFor="">Password</label>
      <input
        ref={password}
        type="password"
        title="password"
        onChange={() => {
          if (password.current?.value) setPasswordError(false);
        }}
      />
      <p
        className={
          passwordError && !password.current?.value
            ? styles.errorMsgShow
            : styles.errorMsgHide
        }
      >
        Cannot be empty!
      </p>

      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        LOGIN
      </button>
      <ToastComponent />
    </form>
  );
};
