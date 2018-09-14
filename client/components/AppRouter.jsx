import React from "react";
import {
  BrowserRouter as Router,
  Route } from "react-router-dom";
import Home from "./Home.jsx";
import Timeline from "./Timeline.jsx";
import Bio from "./Bio.jsx";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Home/>
          <Route exact path="/" component={Bio} />
          <Route exact path="/timeline" component={Timeline} />
        </div>
      </Router>
    );
  }
}
