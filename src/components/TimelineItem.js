import React from 'react';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: "#EA350A" }}>
                Family Photo
            </span>
            <time>{data.date_of_photo}</time>
            {data.url && (
                <img src={data.url.thumb.url} alt="{data.caption}"/>
            )}
            <p>{data.caption}</p>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;
