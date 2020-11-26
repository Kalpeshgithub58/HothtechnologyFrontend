import React, { useEffect, useState } from "react";
import ListOfData from "../form/ListOfData";
import axios from "axios";
const Login = (props) => {
  const { label, passLabel, userLabel, onLoginForm } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onLoginForm(userName, password);
    setUserName("");
    setPassword("");
  };

  return (
    <>
      <center>
        <h1>{label} </h1>
      </center>
      <form onSubmit={onFormSubmit}>
        <div className="container">
          <label>{userLabel}</label>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>{passLabel}</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default Login;
