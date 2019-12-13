import React from "react";

const Team = props => {
  return (
    <div className="team-list">
      {props.members.map(member => (
        <div className="team" key={Team.id}>
          <h2>{member.name}</h2>
          <h3>{member.email}</h3>
          <h3>{member.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default Team;