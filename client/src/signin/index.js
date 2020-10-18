import React from "react";
import styled from "styled-components";
import SignInForm from "../components/Signin";
import Typography from "../components/atoms/typography/Typography";

const StyledTypography = {
  marginLeft: "15% ",
  fontSize: "1.2rem",
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
      <SignInForm />
    </StyledMain>
  );
};
export default SignIn;
