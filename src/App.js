import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import AddNewEvent from "./pages/add-new-event";

function App() {
  return (
    <div className="container-app">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/add-new-task">
            <AddNewEvent />
          </Route>
          <Route path="/*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
