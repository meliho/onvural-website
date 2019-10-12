import React, {Component} from 'react';

class DefaultImage extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.imagePopup = this.imagePopup.bind(this);
  }

  imagePopup() {
    this.props.onImageClick('images/full/default.jpg');
  }

  render() {
    return (
      <div className="timeline-item">
          <div className="timeline-item-content">
              <span className="tag" style={{ background: "#EA350A" }}>
                  family photo
              </span>
              <time>August 4, 2019</time>
              <img src="/images/thumbnail/default.jpg" alt="Onvural babies in Cairo" onClick={this.imagePopup}/>
              <p>Oops - nothing happened in onvural history today, but here's a recent photo anyway</p>
              <span className="circle" />
          </div>
      </div>
    )
  }
}

export default DefaultImage;
