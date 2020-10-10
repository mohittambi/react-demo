import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./Signin.css";

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgb(253, 38, 74);
  color: white;
  font-size: 1.2em;
  margin-top: 0px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  height: 6vh;
`;
function SignInForm() {
  return (
    <div className="secondcontainer">
      <div className="header">Welcome Back</div>
      <form>
        <div className="box">
          <div className="box1">
            <p>Username/Email</p>
            <input />
          </div>
          <div className="box2">
            <p>Password</p>
            <input />
          </div>
        </div>
        <div className="login-button">
          <div className="btn">
            <StyledButton>Login</StyledButton>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
      </form>

      <div className="logingoogle">
        <a href="#">
          <FcGoogle className="googleicon" />
        </a>
        <a href="#" className="login">
          Login with google
        </a>
      </div>
    </div>
  );
}
export default SignInForm;
