import React from "react";

export default class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="bio">
            <h2>Web Developer since 2013, MBA since 2010, Data Analyst since 2004, American since 2003, Human since 1982.</h2>
            <div>I value clean code, beautiful design and thorough testing. Full-stack experience includes Ruby/Rails, Python/Django, ReactJS, AngularJS, HTML/CSS plus a little NodeJS and Swift.</div>
        </div>
    )
  }
}