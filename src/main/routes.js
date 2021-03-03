import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "../views/login";
import UserRegister from "../views/userRegister";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/user-register" component={UserRegister}></Route>
      </Switch>
    </BrowserRouter>
  );
}
