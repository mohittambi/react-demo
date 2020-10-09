import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './home';
import AddEvent from './pages/add-event';
import AddGroup from './group';
import Login from "./login";
import SignUp from "./signup";

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
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </div>
      </div>
    </HashRouter>
  );
};

export default Main;
