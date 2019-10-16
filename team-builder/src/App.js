import  React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import data from './data';
import FormInfo from './Components/FormInfo';
import delData from "./delData";


function App() {
      const [teamList, setTeamList] = useState(data);
      const addNewMem = form => {
        setTeamList([...teamList, form]);
      };
      const [deleteTeam, setDeleteTeam] = useState(delData)
      const deleteNewMem = del => {
        setDeleteTeam([...deleteTeam, del]);
      };
  return (
    <div className="App">
      <h1>Add New Member Form</h1>
      <Form addNewMem={addNewMem} deleteNewMem={deleteNewMem}/>
      <FormInfo formsList={teamList}/>
    </div>
  );
}

export default App;
