import React from "react";
import Grid from "./components/grid";
import "./app.styles.css";

// source goes here
const App = () => {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Welcome to the multiplication tool</h1>
      <Grid />
    </div>
  );
};

export default App;
