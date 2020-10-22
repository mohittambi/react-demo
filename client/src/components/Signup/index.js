import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

import Typography from "../atoms/typography/Typography";
import Button from "../atoms/button/Button";
import Input from "../atoms/input/InputField";

const StyledSecondcontainer = styled.div`
  width: 50%;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  height: auto;
  .signupgoogle {
    background-color: white;
    text-align: center;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
    margin-top: 10%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    .googleicon {
      text-align: center;
      font-size: 3.5rem;
      margin-top: 1%;
    }
    .signup {
      margin-left: 1%;
      font-size: 1.3rem;
      margin-top: 2.5%;
      color: #17408b;
    }
  }
`;

const StyledTopText = styled.div`
  text-align: right;
  margin-top: 10%;
  margin-right: 8%;
  a {
    text-decoration: none;
      font-size: 1rem


  }
`;

const StyledTypography = styled(Typography)`
  width: 280px;
  height: 40px;
  border: none;
  margin: 0 1rem;
  color: #003b6f;
  font-size: 1.2rem
`;

const StyledCreateButton = styled(Button)`
  background: #C9082A 0% 0% no-repeat padding-box;
  color: #fff;
  padding: 7px 14px;
  margin-left: 5%;
  font-size: 1.2rem;
  margin-top: 3%;
  border: none;
`;

const StyledInput = styled(Input)`
  border: none;
  color: #003b6f;
  width: 90%;
  margin-left: 1rem;
  border-radius: 7px;
  height: 60%;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-left: 1rem;
`;

const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-top: 7%;
  margin-left: 4%;
`;

const SignUpForm = () => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)


  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const onPhoneChange = (event) => {
    setPhone(event.target.value)
  }
  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleSign = () => {
    console.log('sign in')
  };

  const onSubmit = () => {
    if (password === confirmPassword && terms) {
      const info = { name, username, phone, email, password, confirmPassword }
      window.location.assign("/")
      console.log(info)
    } else if (password !== confirmPassword) {
      alert('Passwords did not Match. Try Again')
    } else {
      alert('Check On the Terms and Conditions and Privacy Policy')
    }
  }

  return (
    <StyledSecondcontainer>
      <StyledTopText>
        <a href="login">
          Already a memeber? <b style={{ color: "#003b6f" }}>Sign in</b>
        </a>
      </StyledTopText>

      <StyledBox>
        <div>
          <StyledTypography text="Name" />
          <StyledInput type='text' onChange={(event) => onNameChange(event)} />
        </div>
        <div>
          <StyledTypography text="User Name" />
          <StyledInput type='text' onChange={(event) => onUsernameChange(event)} />
        </div>
      </StyledBox>
      <StyledBox>
        <div>
          <StyledTypography text="Phone No." />
          <StyledInput type='phone' onChange={(event) => onPhoneChange(event)} />
        </div>
        <div>
          <StyledTypography text="Email Id" />
          <StyledInput type='email' onChange={(event) => onEmailChange(event)} />
        </div>
      </StyledBox>
      <StyledBox>
        <div>
          <StyledTypography text="Password" />
          <StyledInput type='password' onChange={(event) => onPasswordChange(event)} />
        </div>
        <div>
          <StyledTypography text="Confirm Password" />
          <StyledInput type='password' onChange={(event) => onConfirmPasswordChange(event)} />
        </div>
      </StyledBox>
      <div>
        <StyledCheckbox>
          <div>
            <Checkbox onClick={() => setTerms(!terms)} />
          </div>
          <Typography text="By registring on this website you agree to our Terms of services and privacy policy" />
        </StyledCheckbox>
        <StyledCreateButton onClick={() => onSubmit()} label="Create Account" />
      </div>

      <div className="signupgoogle" onClick={handleSign}>
        <FcGoogle className="googleicon" />
        <div className="signup">Sign up with Google</div>
      </div>
    </StyledSecondcontainer>
  );
}
export default SignUpForm;
