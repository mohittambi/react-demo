import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './home';
import AddEvent from './pages/add-event';
import AddGroup from './group';
import SignUp from "./signup";
import SignIn from "./signin";

const Main = () => {
  return (
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/add-event">Add Event</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/add-event" component={AddEvent} />
          <Route path="/add-group" component={AddGroup} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={SignIn} />
        </div>
      </div>
    </HashRouter>
  );
};

export default Main;
