import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.scss";

const App = () => {
  return (
    <>
      <Router>
        <Switch data="data">
          <div className="App" id="main">
            <header style={{ textAlign: "center" }}>
              <img src="https://cdn.website-editor.net/7faf6d1ccff4459495853794e59fe9be/dms3rep/multi/mobile/Befeni_ohne_Claim.png" alt="beneni" />
            </header>
            <div className="row">
              <div className="col-md-3 box"></div>
              <div className="col-md-6 box">
                <div className="inner">
                  <Route exact path="/" component={Dashboard} />
                </div>
              </div>
              <div className="col-md-3 box"></div>
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
};

export default App;
