import "../App.css";

import React, { useEffect, useState } from "react";

export default function TableData() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setList(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const personz = list.map((person) => {
    return (
      <tr className="rowData">
        <td>
          <img src={person.avatar}/>
        </td>
        <td>{person.id}</td>
        <td>{person.first_name}</td>
        <td>{person.last_name}</td>
        <td>{person.email}</td>
      </tr>
    );
  });

  return (
    <table className="dataTable">
      <thead>
        <tr className="rowData">
          <td>Avatar</td>
          <td>ID</td>
          <td>First name</td>
          <td>Last name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>{personz}</tbody>
    </table>
  );
}
