import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CreateList from "./components/form/CreateList";
import ListOfData from "./components/form/ListOfData";
import Login from "./components/login/App";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/list" component={ListOfData} />
        <Route path="/register" component={CreateList} />
        <Route path="/list/:id" component={CreateList} />
      </Switch>
    </>
  );
};

export default App;
