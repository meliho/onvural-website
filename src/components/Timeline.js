import React from 'react';
import TimelineItem from './TimelineItem.js';

let timelineData = [
    {
        text: 'Hello world! of my first React app',
        date: 'August 15, 2019',
        category: {
            tag: 'coding',
            color: '#018f69'
        },
//        link: {
//            url:'',
//            text: 'Read more'
//        }
    }
];

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;
