import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Home from "./home";
import AddEvent from "./pages/add-event";
import AddGroup from "./group";
import SignUp from "./signup";
import SignIn from "./signin";
import CreateEvent from "./components/createEvent/index"
import EventDetail from "./components/eventDetail/index"


const NavDiv = styled.div`
  background: #C9082A 0% 0% no-repeat padding-box;

  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    margin: 0;

    & > li {
      font-size: 2em;
      text-decoration: none;
      list-style: none;

      font-weight: 500;
      margin-bottom: 1%;
      .nav {
        color: white;
        text-decoration: none;
      }
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
        {window.location.pathname !== "/" && (
          <NavDiv>
            <ul>
              <li>
                <NavLink exact to="/" className="nav">
                  Home
                </NavLink>
              </li>
              <li> <NavLink to="/event-detail" className="nav">
                Event detail
                </NavLink>
              </li>

              <li>
                <NavLink to="/add-event" className="nav">
                  Add Event
                </NavLink>

              </li>
            </ul>
          </NavDiv>
        )}
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/add-event" component={CreateEvent} />
          <Route path="/event-detail" component={EventDetail} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={SignIn} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
