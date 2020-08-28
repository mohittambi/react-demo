import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import From from './components/form';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <div>
      <h1>Project App</h1>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add">Add Details</NavLink></li>
        <li><NavLink to="/view">Show Details</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={App} />
        <Route path="/add" component={From} />
        <Route path="/view" component={From} />
      </div>
    </div>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
