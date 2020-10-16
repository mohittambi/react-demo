import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import Typography from "../atoms/typography/Typography";
import Button from "../atoms/button/Button";
import Input from "../atoms/input/InputField";

import Colors from "../Util/constants";

const StyledTypography = {
  marginTop: "10%",
  textAlign: "start",
  marginLeft: "9%",
  font: "normal normal bold 28px/34px Barlow",
  letterSpacing: "0px",
  color: Colors.blue,

  opacity: "1",
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10%;
  height: auto;
  margin-top: 5%;

  .box1,
  .box2 {
    width: 90%;
    height: 20vh;
    margin-top: 4.5%;
  }
`;

const StyledInputComponent = styled(Input)`
  width: 72%;
  height: 7vh;
  border-radius: 7px;
  border: none;
  background-color: white;
`;

const TypographyContent = {
  textAlign: "left",
  font: "normal normal medium 18px/22px Barlow",
  letterSpacing: "0px",
  color: "#17408B",
  opacity: "1",
  fontSize: "1.3rem",
};

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 5%;
  width: 70%;
  a {
    text-decoration: none;
    font: normal normal normal 15px/18px Barlow;
    letter-spacing: 0px;
    color: #17408b;
  }
`;

const StyledButtonComponent = {
  color: "white",
  fontSize: "1.2em",
  padding: "0.25em 1em",
  border: "none",
  borderRadius: "3px",
  width: "100%",
  height: "6vh",
  background: "#c9082a 0% 0% no-repeat padding-box",
  opacity: "1",
};

const StyledSecond = styled.div`
  width: 50%;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  .logingoogle {
    background-color: white;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 8vh;
    margin-bottom: 3%;
    margin-top: 3%;

    .googleicon {
      font-size: 3.5rem;
    }
    .login {
      color: #003b6f;
      margin-left: 3%;
      font-size: 1.3rem;
      margin-top: 2.5%;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;

const SignInForm = () => {
  return (
    <StyledSecond>
      <Typography style={StyledTypography} text="Welcome Back" />
      <StyledBox>
        <div className="box1">
          <Typography style={TypographyContent} text="Username/Email" />
          <StyledInputComponent />
        </div>
        <div className="box1">
          <Typography style={TypographyContent} text="Password" />
          <StyledInputComponent />
        </div>
      </StyledBox>
      <StyledLogin>
        <div>
          <Button style={StyledButtonComponent}>Login </Button>
        </div>
        <a href="#">Forgot Password?</a>
      </StyledLogin>

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
};

export default SignInForm;
