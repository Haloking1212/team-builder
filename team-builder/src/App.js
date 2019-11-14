import React, { useState } from 'react';

//components
import Form from "./component/Form";
import data from "./data";
import FormInfo from "./component/FormInfo";
import './App.css';

function App() {
  const [teamList, setTeamList] = useState(data);
  const addNewMem = form => {
    setTeamList([...teamList, form]);
  };
  return (
    <div className="App">
        <h1>Add New Member Form</h1>
        <Form addNewMem={addNewMem}/>
        <FormInfo formsList={teamList}/>
    </div>
  );
}

export default App;
