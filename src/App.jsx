import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.scss";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
