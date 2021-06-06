import React from "react";
import ReactDOM from "react-dom";

console.log("Welcome to the Which? Javascript exercise!");
console.log(
  "If you are reading this, your Javascript runtime is all up and running correctly."
);

// dont put any source in this file, this is just an entry point for the app.
// you can require things in.
import App from "./app.jsx";
import "./styles.css";

ReactDOM.render(<App />, document.getElementById("root"));
