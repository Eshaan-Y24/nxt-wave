import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastComponent = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
    </div>
  );
};

export const showToastMessage = (
  type: "success" | "failure",
  message?: string
) => {
  if (type === "success")
    toast.success(!message ? "Item created!" : message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  else
    toast.error(message ? message : "Failure! Please try again later", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
};
