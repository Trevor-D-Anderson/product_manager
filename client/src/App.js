import React, { useState } from "react";
import { Router } from "@reach/router";
import Main from "./views/Main";

const App = () => {
  return (
    <div>
      <Router>
        <Main path="/home" />
      </Router>
    </div>
  );
};
export default App;
