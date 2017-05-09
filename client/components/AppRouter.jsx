import React from "react";
import {
  BrowserRouter as Router,
  Route } from "react-router-dom";
import Home from "./Home.jsx";
import Timeline from "./Timeline.jsx";
import Bio from "./Bio.jsx";

export default class FormRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route exact path="/" component={Bio} />
          <Route path="/timeline" component={Timeline} />
        </div>
      </Router>
    );
  }
}