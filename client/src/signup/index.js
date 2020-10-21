import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/Signup/index";
import Typography from "../components/atoms/typography/Typography";

const StyledTypography = {
  marginLeft: "15% ",
  fontSize: "1.2rem",
  font: "normal normal medium 20px/24px Barlow",
  letterSpacing: "0px",
  color: "#17408b",
};

const StyledMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  .firstcontainer {
    background-color: #fff;
    width: 50%;
    height: 100vh;
  }
  h1 {
    font: normal normal bold 28px/34px Barlow;
    letter-spacing: 0px;
    color: #17408b;
    margin-left: 15%;
    margin-top: 10%;
  }
`;

const SignIn = () => {
  return (
    <StyledMain>
      <div className="firstcontainer">
        <h1>Let's Get Started</h1>
        <Typography
          style={StyledTypography}
          text="Complete the sign up process for engaging in sports"
        />
        <img
          src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
          alt="img"
        />
      </div>
      <SignUpForm />
    </StyledMain>
  );
};
export default SignIn;
