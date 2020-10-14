import React from "react";
import SignInForm from "../components/Signin";
import "../components/Signin/Signin.css";
import StyledTypographyComponent from "../components/atoms/Textarea";
import styled from "styled-components";

const StyledTypography = styled(StyledTypographyComponent)`
  margin-left: 15% !important;
  margin-top: 10%;
  color: #003b6f;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
`;

const StyledMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  .firstcontainer {
    background-color: rgb(253, 250, 250);
    width: 50%;
    height: 100vh;
  }
`;

function SignIn() {
  return (
    <StyledMain>
      <div className="firstcontainer">
        <h1>Let's Get Started</h1>
        <StyledTypography>
          Complete the sign up process for engaging in sports
        </StyledTypography>
        <img
          src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
          alt="img"
        ></img>
      </div>
      <SignInForm />
    </StyledMain>
  );
}
export default SignIn;
