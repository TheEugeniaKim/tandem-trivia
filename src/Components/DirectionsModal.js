import React from "react";
import { Modal, Button } from 'react-bootstrap'

function DirectionsModal(props){
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to Tandem Trivia! 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Directions:</h4>
        <p>
          Answer the following 10 trivia questions by selecting one of four multiple 
          choice options. Once you are ready to move on, click Next to move forward.
          Good luck!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DirectionsModal