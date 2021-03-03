import {Constants} from './constants.js'

function Timeline() {
    const listItems = Constants.MOMENTS.map(moment => {
        return (
              <div data-testid="timeline-block" className="timeline-block" key={moment.id}>
                  <div className="timeline-content"><span className="timeline-text">{moment.date}: <span dangerouslySetInnerHTML={{__html: moment.text}}></span></span></div>
              </div>
        );
    });
    return (
        <div data-testid="timeline" className="timeline">
			{listItems}
		</div>
    );
  }
  
  export default Timeline;