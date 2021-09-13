import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="container-app">
      <Router>
        <Route path="*">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
