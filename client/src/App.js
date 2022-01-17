import React from "react";
import { Redirect, Router } from "@reach/router";
import "./App.css";
import Main from "./views/Main";
import ViewProduct from "./components/ViewProduct";
import Update from "./components/Update";

const App = () => {
  return (
    <div className="flex justify-center w-5/6">
      <Router>
        <Redirect from="/" to="/home" />
        <Main path="/home" />
        <ViewProduct path="/product/:id" />
        <Update path="/product/edit/:id" />
      </Router>
    </div>
  );
};
export default App;
