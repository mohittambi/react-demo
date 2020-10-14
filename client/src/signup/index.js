import React from "react";
import SignUpForm from "../components/Signup";
import "../components/Signup/Signup.css";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledTypography = styled(Typography)`
  margin-left: 15% !important;
  margin-top: 10%;
  color: #003b6f;
  font-family: "Lora", serif;
`;
const StyledMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const SignUp = () => {
  return (
    <StyledMain>
      <div>
        <h1>Let's Get Started</h1>
        <StyledTypography>
          Complete the sign up process for engaging in sports
        </StyledTypography>
        <img
          src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
          alt="img"
        />
      </div>
      <SignUpForm />
    </StyledMain>
  );
}
export default SignUp;
