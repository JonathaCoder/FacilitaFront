import React, { useEffect, useState } from 'react';
import { Table, Modal, ModalBody, ModalHeader, Button, Input } from 'reactstrap';
import { HiArchiveBoxXMark, HiOutlinePencil  } from "react-icons/hi2";
import FormCreate from './components/Form';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import './App.css';
import NavComponent from './components/Nav';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [nameFilter, setNameFilter] = useState('');

  async function getTodos() {
    const response = await axios.get("http://localhost:3333/todos");
    setTodos(response.data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  async function deletetodo(client) {
    await axios.delete(`http://localhost:3333/todos/${client.id}`);
    getTodos();
  }

  const openEditModal = (client) => {
    setEditingClient(client);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingClient(null);
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    if (editingClient) {
      await axios.put(`http://localhost:3333/todos`, {
        id: editingClient.id,
        name: editingClient.name,
        email: editingClient.email,
        telefone: editingClient.telefone
      });
      closeEditModal();
      getTodos();
    }
  };

  const filterByName = (client) => {
    return client.name.toLowerCase().includes(nameFilter.toLowerCase());
  };

  const filteredClients = todos.filter(filterByName);

  const AllClient = ({ allClient }) => {
    return (
      
      <div className="allClient">
      
        <div className='Table'>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((clients) => (
                <tr key={clients.id}>
                  <th scope="row">{clients.id}</th>
                  <td>{clients.name}</td>
                  <td>{clients.email}</td>
                  <td>{clients.telefone}</td>
                  <td>
                    <button onClick={() => deletetodo(clients)}>
                      <HiArchiveBoxXMark />
                    </button>
                    <button onClick={() => openEditModal(clients)}>
                      <HiOutlinePencil />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
       <NavComponent/>
      <header className="App-header">
        <div>
          <FormCreate />
        </div>

      <div className='SearchComponent'>
        <Input
          type="search"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className='filterTable'
        /><CiSearch/>
        </div>
        <AllClient allClient={todos} />
        <Modal isOpen={isEditModalOpen} toggle={closeEditModal}>
          <ModalHeader toggle={closeEditModal}>Edit Client</ModalHeader>
          <ModalBody>
            <div className='ModalEdit'>
              <input
                type="text"
                value={editingClient ? editingClient.name : ''}
                onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
              />
              <input
                type="text"
                value={editingClient ? editingClient.email : ''}
                onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })}
              />
              <input
                type="text"
                value={editingClient ? editingClient.telefone : ''}
                onChange={(e) => setEditingClient({ ...editingClient, telefone: e.target.value })}
              />
              <Button color="primary" onClick={handleUpdate} className='Save'>
                Save Changes
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </header>
    </div>
  );
}

export default App;
