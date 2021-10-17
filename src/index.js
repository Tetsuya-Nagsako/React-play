import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  rootElement
);
