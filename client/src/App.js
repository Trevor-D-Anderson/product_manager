import React, { useState } from "react";
import { Redirect, Router } from "@reach/router";
import "./App.css";
import Main from "./views/Main";

const App = () => {
  return (
    <div>
      <Router>
        <Redirect from="/" to="/home" />
        <Main path="/home" />
      </Router>
    </div>
  );
};
export default App;
