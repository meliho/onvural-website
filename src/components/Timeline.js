import React, {Component} from 'react';

import API from "./API";
import TimelineItem from './TimelineItem.js';
import DefaultImage from './DefaultImage.js';
import DefaultBlogLink from './DefaultBlogLink.js';
import ImageModal from './ImageModal.js';
import LoadingScreen from './LoadingScreen.js';

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {showBigImage: false, modalImageUrl: 'images/full/default.jpg', isLoading: true, timelineData: []}
    this.triggerImageModal = this.triggerImageModal.bind(this);
  }

  async componentDidMount() {
    // Load async data.
    try {
      let timelineData = await API.get('/photos/today.json');

      // Update state with new data.
      this.setState({
        isLoading: false,
        timelineData: timelineData.data
      });
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }

  triggerImageModal = (modalImageUrl) => {
    this.setState({
      showBigImage: !this.state.showBigImage,
      modalImageUrl: modalImageUrl
    });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingScreen />
    } else {
      if(this.state.timelineData.length > 0) {
        return (
          <div className="timeline-container">
              {this.state.timelineData.map((data, idx) => (
                  <TimelineItem data={data} key={idx} />
              ))}
              <DefaultBlogLink />
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
}

export default Timeline;
