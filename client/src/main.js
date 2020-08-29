import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import App from './App';
import From from './components/form';

const Main = () => {
  return (
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/add">Add Details</NavLink></li>
          <li><NavLink to="/view">Show Details</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={App} />
          <Route path="/add" component={From} />
          <Route path="/view" component={From} />
        </div>
      </div>
    </HashRouter>
  );
};

export default Main;