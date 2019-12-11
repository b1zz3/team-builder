import React, { useState } from "react";

const TeamForm = ({addTeamMember}) => {
  const [ team, setTeam ] = useState({
    name: "",
    email: "",
    role: ""
  });

  const textInput = event => {
    setTeam({ ...team, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();

    addTeamMember(team);

    setTeam({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={textInput}
        value={team.name}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Email"
        onChange={textInput}
        value={team.email}
      />

      <label hemlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="Role"
        onChange={textInput}
        value={team.role}
      />

      <button type="submit">Add Team Member</button>
    </form>
  )


};

export default TeamForm;