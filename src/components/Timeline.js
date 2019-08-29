import React from 'react';
import TimelineItem from './TimelineItem.js';
import Dateheader from './Dateheader.js';
import todayData from './data.js';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let today = new Date();
let todayString = months[today.getMonth()]+" "+today.getDate();

const Timeline = () =>
    todayData.length > 0 && (
        <div>
          <Dateheader data={todayString}/>
          <div className="timeline-container">
              {todayData.map((data, idx) => (
                  <TimelineItem data={data} key={idx} />
              ))}
          </div>
        </div>
    );

export default Timeline;
