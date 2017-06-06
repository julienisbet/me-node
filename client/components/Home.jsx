import React from "react";
import {NavLink, Link} from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="headline">
            <h1>Julie Nisbet</h1>
            <div id="links">
                <a href="https://github.com/julienisbet" target="_blank"><img src="assets/logos/github.png"/></a>
                <a href="http://www.linkedin.com/in/jmnisbet" target="_blank"><img src="assets/logos/linkedin.png"/></a>
                <a href="http://julesnisbet.tumblr.com/" target="_blank"><img src="assets/logos/tumblr.png"/></a>
                <a href="http://www.instagram.com/juleslaroo" target="_blank"><img src="assets/logos/instagram.png"/></a>
                <a href="http://www.twitter.com/julesnisbet" target="_blank"><img src="assets/logos/twitter.png"/></a>
                <Link to="/resume" target="_blank"><img src="assets/logos/resume.png"/></Link>
            </div>
        </div>
        <div className="about">
            <div className="nav">
                <NavLink to="/" activeClassName="selected" className="nav-item" exact={true}>My Bio</NavLink>
                <NavLink to="/timeline" activeClassName="selected" className="nav-item">Timeline</NavLink>
            </div>
        </div>
      </div>
    )
  }
}