import React from "react";
import { createRoot } from "react-dom/client";
import "./src/index.css";
import App from "./src/App";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props, element = null) => {
  console.log("loading chatbot widget...");
  const load = () => {
    if (element === null) {
      const node = document.createElement("div");
      node.setAttribute("id", "rasaWidget");
      document.body.appendChild(node);
    }
    const mountElement = element || document.getElementById("rasaWidget");
    const root = createRoot(mountElement);
    root.render(<App />);
  };

  if (document.readyState === "complete") {
    load();
  } else {
    window.addEventListener("load", () => {
      load();
    });
  }
};
