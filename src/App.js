import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { FaceBook } from "./components/FaceBook";
import { Tweet } from "./components/Tweet";
import { Booking } from "./components/Booking";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { EmployeeUpsert } from "./components/EmployeeUpsert";
import { EmployeeList } from "./components/EmployeeList";

export default function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/tweet" exact>
          <Tweet />
        </Route>

        <Route path="/facebook" exact>
          <FaceBook />
        </Route>

        <Route path="/booking" exact>
          <Booking />
        </Route>

        <Route path="/employeeupsert" exact>
          <EmployeeUpsert />
        </Route>

        <Route path="/employeelist" exact>
          <EmployeeList />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
