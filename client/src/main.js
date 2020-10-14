import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Home from "./home";
import AddEvent from "./pages/add-event";
import AddGroup from "./group";
import SignUp from "./signup";
import SignIn from "./signin";

const NavDiv = styled.div`
  background-color: #fd264a;
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    margin: 0;
    & > li {
      font-size: 2.5em;
      list-style: none;
      font-weight: 800;
      margin-bottom: 1%;
    }
  }
  ul > li:last-child {
    margin-right: 50px;
  }
`;

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        {(window.location.pathname !== '/') &&
          (<NavDiv>
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/add-event">Add Event</NavLink></li>
            </ul>
          </NavDiv>)
        }
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/add-event" component={AddEvent} />
          <Route path="/add-group" component={AddGroup} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={SignIn} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
