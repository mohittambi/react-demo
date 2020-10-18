import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/Signup/index";
import Typography from "../components/atoms/typography/Typography";

const StyledTypography = styled(Typography)`
  marginLeft: 15%;
  fontSize: 1.2rem;
  color: #17408b;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  .firstcontainer {
    background-color: #fff;
    width: 50%;
    padding-left: 15%;
    height: 100vh;
  }
  h2 {
    color: #17408b;
    margin-left: 15%;
    margin-top: 10%;
  }
`;

const SignIn = () => {
  return (
    <StyledMain>
      <div className="firstcontainer">
        <h2>Let's Get Started</h2>
        <StyledTypography text="Complete the sign up process for engaging in sports" />
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
