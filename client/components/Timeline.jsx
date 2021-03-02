import React from "react";
import {Constants} from './constants.js'

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
     const listItems = Constants.MOMENTS.map(function(moment) {
      return (
		    <div className="timeline-block" key={moment.id}>
		        <div className="timeline-content"><span className="timeline-text">{moment.date}: <span dangerouslySetInnerHTML={{__html: moment.text}}></span></span></div>
		    </div>
      );
    });
    return (
			<div className="timeline">
			{listItems}
			</div>
    )
  }
}