import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import App from './App';
import Home from './home';
import AddEvent from './pages/add-event';
import AddGroup from './group';

const Main = () => {
  return (
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Login</NavLink></li>
          <li><NavLink to="/home-page">Home</NavLink></li>
          <li><NavLink to="/add-event">Add Event</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={App} />
          <Route path="/home-page" component={Home} />
          <Route path="/add-event" component={AddEvent} />
          <Route path="/add-group" component={AddGroup} />
        </div>
      </div>
    </HashRouter>
  );
};

export default Main;