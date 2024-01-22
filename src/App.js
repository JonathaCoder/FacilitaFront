
import './App.css';
import React, { useEffect, useState } from 'react';
import {Table} from 'reactstrap'
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi2";
import FormCreate from './components/Form';
import axios from 'axios';

const arrayAll = [
  {
    name:"jonatha",
    email:"jonatha@teste.com.br"
  }
]
const AllClient = ({allClient}) =>{
  return(
     <div className="allClient">
       {allClient.map((clients)=>{
         return(
          

<div className='Table'>
 <Table hover>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Name
      </th>
      <th>
        Email
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
       {clients.name}
      </td>
      <td>
    {clients.email}
      </td>
      <td>
        <button><HiArchiveBoxXMark /></button>
        <button><HiOutlinePencil /></button>
      </td>
    </tr>
   
  </tbody>
   </Table>
   </div>
 
         )
       })}
        
     </div>
  )
}


function App() {
   
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const response = await axios.get("http://localhost:3333/todos");
    setTodos(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    getTodos();
  },[])



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <FormCreate/>
        </div>
      <AllClient allClient={arrayAll}/>
    
      </header>
    </div>
  );
}

export default App;
