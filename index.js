import React from "react";
import { createRoot } from "react-dom/client";
import { Widget } from "./src/Widget";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props, element = null) => {
  const load = () => {
    if (element === null) {
      const node = document.createElement("div");
      node.setAttribute("id", "rasaWidget");
      document.body.appendChild(node);
    }
    const mountElement = element || document.getElementById("rasaWidget");
    const root = createRoot(mountElement);
    root.render(<Widget {...props} />);
  };

  if (document.readyState === "complete") {
    load();
  } else {
    window.addEventListener("load", () => {
      load();
    });
  }
};
