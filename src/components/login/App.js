import React from "react";

import Login from "./Login";
import { login } from "../StaticData/staticfile";
import Axios from "axios";

const App = ({ history }) => {
  const onLoginForm = (userName, password) => {
    const loginValidation =
      userName === login.userName && password === login.Password;

    Axios.post("http://localhost:8080/Login/CheckUser", {
      id: 0,
      userName: userName,
      password: password,
    }).then((response) => {
      if (response.data) {
        history.push("/list");
      } else {
        alert("Please Enter valid userName and Password");
      }
    });
  };

  return (
    <Login
      label={login.label}
      passLabel={login.userLabel}
      userLabel={login.userLabel}
      onLoginForm={onLoginForm}
    />
  );
};
export default App;
