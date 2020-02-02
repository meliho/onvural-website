import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';

class ImageModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body>
          <img src={this.props.modalimageurl} alt="Large version of the homepage photo" onClick={this.imagePopup}/>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ImageModal;
