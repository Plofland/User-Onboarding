import React from "react";

export default function Users({ details }) {
  return (
    <div className="userCard">
      <h2>{details.name}</h2>
      <p>{details.email}</p>
      <p>{details.role}</p>
    </div>
  );
}
