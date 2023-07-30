import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function PopOver(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className=''>
      <Button color="dark" onClick={toggle}>
        Details
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </Button>
      <div className="modal__container">
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
        <strong> 
          Project Overview:</strong><br/>
          {props.description}
          <div className="tech__components">
          <strong>Technologies Used:</strong>
          <br />
          &emsp;&emsp;&emsp;  
          <strong>Frontend:</strong>
          {props.frontend}
          <br />
          &emsp;&emsp;&emsp;
          <strong>Backend:</strong>
          {props.backend}
          </div>
        </ModalBody>
        <ModalFooter>
          <a href={props.gitlink} target='_blank'>
          <Button color="primary" onClick={toggle}>
            <i className="uil uil-github"> </i>
            GitHub Link
          </Button></a>
          {' '}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
  );
}

export default PopOver;