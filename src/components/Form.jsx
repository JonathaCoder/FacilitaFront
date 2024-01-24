import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function FormCreate(args) {
  const [modal, setModal] = useState(false);
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [teleValue, setTeleValue] = useState();

  const toggle = () => setModal(!modal);
  async function CreateTodo() {
    const response = await axios.post("http://localhost:3333/todos", {
      name: nameValue,
      email: emailValue,
      telefone:teleValue,
    });

    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
  return (
    <div>
      <Button className="btnAdd" onClick={toggle}>
      Cadaster +
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>+ New Client</ModalHeader>
        <ModalBody className="form">
          <label>Name:</label>
          <input
            type="text"
            className="inputName"
            onChange={(e) => setNameValue(e.target.value)}
          ></input>
          <label>email:</label>
          <input
            type="text"
            className="inputEmail"
            onChange={(e) => setEmailValue(e.target.value)}
          ></input>
          <label >Telefone</label>
           <input
            type="text"
            className="inputTele"
            onChange={(e) => setTeleValue(e.target.value)}
          ></input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={CreateTodo}>
            + Create
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FormCreate;
