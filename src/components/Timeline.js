import React, {Component} from 'react';
import TimelineItem from './TimelineItem.js';
import DefaultImage from './DefaultImage.js';
import DefaultBlogLink from './DefaultBlogLink.js';
import ImageModal from './ImageModal.js';
import todayData from './data.js';

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {showBigImage: false, modalImageUrl: 'images/full/default.jpg'}
    this.triggerImageModal = this.triggerImageModal.bind(this);
  }

  triggerImageModal = (modalImageUrl) => {
    this.setState({
      showBigImage: !this.state.showBigImage,
      modalImageUrl: modalImageUrl
    });
  }

  render() {
    if(todayData.length > 0) {
      return (
        <div className="timeline-container">
            {todayData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
            <ImageModal
              show={this.state.showBigImage}
              onHide={this.triggerImageModal}
              modalimageurl={this.state.modalImageUrl}
            />
        </div>
      );
    } else {
      return (
        <div className="timeline-container">
          <DefaultImage onImageClick={this.triggerImageModal}/>
          <DefaultBlogLink />
          <ImageModal
            show={this.state.showBigImage}
            onHide={this.triggerImageModal}
            modalimageurl={this.state.modalImageUrl}
          />
        </div>
      );
    }
  }
}

export default Timeline;
