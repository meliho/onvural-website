import React from 'react';

const DefaultImage = () => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: "#EA350A" }}>
                family photo
            </span>
            <time>August 4, 2019</time>
            <img src="/images/thumbnail/default.jpg" alt="Onvural babies in Cairo"/>
            <p>Oops - nothing happened in onvural history today, but here's a recent photo anyway</p>
            <span className="circle" />
        </div>
    </div>
);

export default DefaultImage;
