import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import AppLayout from "./container/AppLayout";

// style scss
import "./assets/styles/index.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppLayout} />
      </Switch>
    </Router>
  );
}

export default App;
