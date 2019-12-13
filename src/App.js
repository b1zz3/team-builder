import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from "./team";
import TeamForm from "./teamForm";

function App() {
  const [members, setMembers] = useState([]);

  const addTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    const newTeamList = [...members, newMember];

    setMembers(newTeamList);
  };

  return (
    <div className="App">
      <h1>The Team</h1>
      <TeamForm addTeamMember={addTeamMember} />
      <Team members={members} />
    </div>
  );
}

export default App;
