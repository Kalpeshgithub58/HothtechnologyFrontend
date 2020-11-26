import Axios from "axios";
import React, { useEffect, useState } from "react";
//import { listOfData } from "../StaticData/staticfile";
const ListOfData = ({ history }) => {
  const [listOfData, setListOfData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/personApi/getAllRecord").then(
      (response) => {
        setListOfData(response.data);
      }
    );
  }, []);

  const editPerson = (id) => {
    history.push(`/list/${id}`);
  };

  const deletePerson = (id) => {
    console.log(id);
    Axios.get("http://localhost:8080/personApi/delete/", {
      params: {
        personId: id,
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const dataValues = listOfData.map((list, index) => {
    return (
      <tr key={index}>
        <td>{list.name}</td>
        <td>{list.mobileNumber}</td>
        <td>{list.country}</td>
        <td>{list.state}</td>
        <td>{list.city}</td>
        <td>
          <button onClick={() => editPerson(list.id)}>Edit</button>
        </td>
        <td>
          <button onClick={() => deletePerson(list.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <center>
        <h1>List Of Data</h1>
      </center>
      <button
        style={{ textAlign: "right" }}
        onClick={() => history.push("/register")}
      >
        Create a List
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Mobile Number</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{dataValues}</tbody>
      </table>
    </>
  );
};
export default ListOfData;
