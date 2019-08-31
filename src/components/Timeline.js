import React, {Component} from 'react';
import TimelineItem from './TimelineItem.js';
import DefaultImage from './DefaultImage.js';
import DefaultBlogLink from './DefaultBlogLink.js';
import todayData from './data.js';

class Timeline extends Component {

  render() {
    if(todayData.length > 0) {
      return (
        <div className="timeline-container">
            {todayData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
      );
    } else {
      return (
        <div className="timeline-container">
          <DefaultImage />
          <DefaultBlogLink />
        </div>
      );
    }
  }
}

export default Timeline;
