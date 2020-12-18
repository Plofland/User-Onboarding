import React from "react";

export default function Users({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>;
  }

  return (
    <div className="userCard">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
