import React from 'react';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            {data.img && (
                <img src={data.img.url} alt="{data.text}"/>
            )}
            <p>{data.text}</p>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;
