import React, { useRef, useState } from "react";
import styles from "./Form.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData } from "../../functions";
import axios from "axios";

export const Form = () => {
  const name = useRef<HTMLInputElement>(null);
  const link = useRef<HTMLInputElement>(null);
  const resource = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  const [nameError, setNameError] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [resourceError, setResourceError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const showToastMessage = (type: "success" | "failure", message?: string) => {
    if (type === "success")
      toast.success(!message ? "Item created!" : message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    else
      toast.error(message ? message : "Failure! Please try again later", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let data = {
      item_name: name?.current?.value,
      item_link: link?.current?.value,
      resource_name: resource?.current?.value,
      description: description?.current?.value,
    };
    if (
      !data.item_name ||
      !data.item_link ||
      !data.resource_name ||
      !data.description
    ) {
      if (!data.item_name) setNameError(true);
      if (!data.item_link) setLinkError(true);
      if (!data.resource_name) setResourceError(true);
      if (!data.description) setDescriptionError(true);

      showToastMessage(
        "failure",
        "Empty Fields! Please fill the fields correctly"
      );
    } else {
      const baseUrl =
        "https://media-content.ccbp.in/website/react-assignment/add_resource.json";
      const options = {
        url: baseUrl,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: data,
      };
      axios(options)
        .then((response) => {
          console.log(response.status);
          showToastMessage("success");
        })
        .catch((error) => {
          console.log(error);
          showToastMessage("failure");
        });
    }
  };
  return (
    <form className={styles.formWrapper}>
      <h1>Item Details</h1>
      <label htmlFor="">ITEM NAME</label>
      <input
        ref={name}
        type="text"
        title="item name"
        onChange={() => {
          if (name.current?.value) setNameError(false);
        }}
      />
      <p
        className={
          nameError && !name.current?.value
            ? styles.errorMsgShow
            : styles.errorMsgHide
        }
      >
        Cannot be empty!
      </p>

      <label htmlFor="">LINK</label>
      <input
        ref={link}
        type="text"
        title="link"
        onChange={() => {
          if (link.current?.value) setLinkError(false);
        }}
      />
      <p
        className={
          linkError && !link.current?.value
            ? styles.errorMsgShow
            : styles.errorMsgHide
        }
      >
        Cannot be empty!
      </p>

      <label htmlFor="">RESOURCE NAME</label>
      <input
        ref={resource}
        type="text"
        title="resource name"
        onChange={() => {
          if (resource.current?.value) setResourceError(false);
        }}
      />
      <p
        className={
          resourceError && !resource.current?.value
            ? styles.errorMsgShow
            : styles.errorMsgHide
        }
      >
        Cannot be empty!
      </p>

      <label htmlFor="">DESCRIPTION</label>
      <textarea
        ref={description}
        title="description"
        onChange={() => {
          if (description.current?.value) setDescriptionError(false);
        }}
      />
      <p
        className={
          descriptionError && !description.current?.value
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
        CREATE
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        closeButton={false}
      />
    </form>
  );
};
