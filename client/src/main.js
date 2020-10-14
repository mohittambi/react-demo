import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import AddEvent from "./pages/add-event";
import AddGroup from "./group";
import SignUp from "./signup";
import SignIn from "./signin";
import styled from "styled-components";

const NavDiv = styled.div`
  background-color: #fd264a;
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    & > li {
      font-size: 2.5em;
      list-style: none;
      font-weight: 800;
      margin-bottom: 1%;
    }
  }
  ul > li:nth-child(2) {
    margin-right: 50px;
  }
`;

const Main = () => {
  return (
    <HashRouter>
      <div>
        <NavDiv>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-event">Add Event</NavLink>
            </li>
          </ul>
        </NavDiv>
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
