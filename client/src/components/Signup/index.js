import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledCreateButton = styled.button`
  background-color: rgb(253, 38, 74);
  color: #fff;
  padding: 7px 14px;
  margin-left: 5%;
  font-size: 1.2rem;
  margin-top: 3%;
  border: none;
`;
const StyledTypography = styled(Typography)`
  margin-bottom: 0.5%;
  font-family: "Lora", serif;
  width: 200px;
  height: 40px;
  border: none;
  margin-left: 5% !important;
  color: #003b6f;
`;
const StyledSecondcontainer = styled.div`
  width: 50%;
  background-color: rgb(228, 225, 225);
  height: auto;
  margin-left: 15%;
  .header {
    text-align: right;
    margin-top: 5%;
    background-color: transparent;
    max-width: 100%;
    margin-right: 8%;
  }
  .signupgoogle {
    background-color: white;
    text-align: center;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
    margin-top: 5%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    .googleicon {
      text-align: center;
      font-size: 3.5rem;
      margin-top: 1%;
    }
    .signup {
      color: #003b6f;
      margin-left: 1%;
      background-color: transparent;
      font-size: 1.3rem;
      margin-top: 2.5%;
      font-family: "Lora", serif;
    }
  }
`;
const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-left: 3%;
`;
const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-top: 7%;
  margin-left: 4%;
`;
const StyledInput = styled.input`
  border: none;
  margin-left: 5%;
  color: #003b6f;
  width: 330px;
  margin-left: 10px;
  border-radius: 7px;
  height: 60%;
`;

function SignUpForm() {
  return (
    <StyledSecondcontainer>
      <div className="header">
        <a href="signin">
          Already a memeber? <b style={{ color: "#003b6f" }}>Sign in</b>
        </a>
      </div>
      <form>
        <StyledBox>
          <div>
            <StyledTypography>Name</StyledTypography>
            <StyledInput />
          </div>
          <div>
            <StyledTypography>User Name</StyledTypography>
            <StyledInput />
          </div>
        </StyledBox>
        <StyledBox>
          <div>
            <StyledTypography>Phone No.</StyledTypography>
            <StyledInput />
          </div>
          <div>
            <StyledTypography>Email Id</StyledTypography>
            <StyledInput />
          </div>
        </StyledBox>
        <StyledBox>
          <div>
            <StyledTypography>Password</StyledTypography>
            <StyledInput />
          </div>
          <div>
            <StyledTypography>Confirm Password</StyledTypography>
            <StyledInput />
          </div>
        </StyledBox>
        <div className="box2">
          <StyledCheckbox>
            <div className="icon">
              <Checkbox />
            </div>
            <p>
              By registring on this website you agree to our Terms of services
              and privacy policy
            </p>
          </StyledCheckbox>
          <StyledCreateButton>Create Account</StyledCreateButton>
        </div>
      </form>

      <div className="signupgoogle">
        <FcGoogle className="googleicon" />
        <div className="signup">Sign up with Google</div>
      </div>
    </StyledSecondcontainer>
  );
}
export default SignUpForm;
