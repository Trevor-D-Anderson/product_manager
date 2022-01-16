import React from "react";
import { Redirect, Router } from "@reach/router";
import "./App.css";
import Main from "./views/Main";
import ViewProduct from "./components/ViewProduct";

const App = () => {
  return (
    <div className="flex justify-center w-5/6">
      <Router>
        <Redirect from="/" to="/home" />
        <Main path="/home" />
        <ViewProduct path="/product/:id" />
      </Router>
    </div>
  );
};
export default App;
