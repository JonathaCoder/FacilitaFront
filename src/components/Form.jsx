import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import App from '../App';
function FormCreate(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>+ New Client</ModalHeader>
        <ModalBody className='form'>
          <label>Name:</label>  
          <input type='text'></input>
          <label>email:</label>  
          <input type='text'></input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
           + Create
          </Button>{' '}
         
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FormCreate;