import "./App.css";
import Router from "./app/router";
import React from "react";
import Provider from "./app/provider";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
