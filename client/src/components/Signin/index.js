import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./Signin.css";
import styled from "styled-components";
// import Input from "@material-ui/core/Input";
// import StyledInputComponent from "../atoms/InputField";
// import StyledButtonComponent from "../atoms/Button";
import StyledTypographyComponent from "../atoms/Textarea";

const StyledSecond = styled.div`
  width: 50%;
  background-color: rgb(228, 225, 225);
  .header {
    margin-top: 10%;
    text-align: start;
    margin-left: 9%;
    font-size: 2.3rem;
    color: #003b6f;
    font-family: "Roboto", sans-serif;

    font-weight: 500;
  }

  .logingoogle {
    background-color: white;
    text-align: center;
    width: 70%;
    margin-left: 5%;
    margin-top: 10%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 8vh;
    margin-bottom: 20px;
    .googleicon {
      font-size: 3.5rem;
    }
    .login {
      color: #003b6f;
      margin-left: 1%;
      font-size: 1.3rem;
      margin-top: 2.5%;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
    }
  }
`;
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10%;
  height: auto;
  margin-top: 5%;
`;
const StyledInputComponent = styled.input`
  width: 72%;
  height: 7vh;
  border-radius: 7px;
  border: none;
  background-color: white;
`;

const StyledButtonComponent = styled.button`
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

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 5%;
  width: 70%;
`;

function SignInForm() {
  return (
    <StyledSecond>
      <div className="header">Welcome Back</div>
      <form>
        <StyledBox>
          <div className="box1">
            <StyledTypographyComponent>
              Username/Email
            </StyledTypographyComponent>
            <StyledInputComponent />
          </div>
          <div className="box1">
            <StyledTypographyComponent>Password</StyledTypographyComponent>
            <StyledInputComponent />
          </div>
        </StyledBox>
        <StyledLogin>
          <div className="btn">
            <StyledButtonComponent>Login</StyledButtonComponent>
          </div>
          <a href="#">Forgot Password?</a>
        </StyledLogin>
      </form>

      <div className="logingoogle">
        <a href="#">
          <FcGoogle className="googleicon" />
        </a>
        <a href="#" className="login">
          Login with google
        </a>
      </div>
    </StyledSecond>
  );
}
export default SignInForm;
