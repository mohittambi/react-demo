import React, { useReducer } from "react";
import { connect } from 'react-redux';

import styled from "styled-components";

import Checkbox from "@material-ui/core/Checkbox";
import Typography from "../atoms/typography/Typography";
import Button from "../atoms/button/Button";
import Input from "../atoms/input/InputField";

import { FcGoogle } from "react-icons/fc";

import {
  signUpUser,
} from './store/actions';
import {
  SET_NAME,
  SET_USERNAME,
  SET_PHONE,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRMPASSWORD,
  SET_TERMS,
  initState,
  signUpReducer,
} from "./helpers/signup-state";

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
      margin-left: 1%;
      font-size: 1.3rem;
      margin-top: 2.5%;
      color: #17408b;
    }
  }
`;

const StyledTopText = styled.div`
  text-align: right;
  margin-top: 5%;
  margin-right: 8%;
  a {
    text-decoration: none;
  }
`;

const StyledTypography = styled(Typography)`
  width: 200px;
  height: 40px;
  border: none;
  margin: 0 1rem;
  color: #003b6f;
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

const SignUpForm = (props) => {
  const [state, dispatch] = useReducer(
    signUpReducer,
    {},
    initState
  );

  const {
    name,
    username,
    phone,
    email,
    password,
    confirmPassword,
    terms
  } = state;

  const handleSign = () => {
    console.log('sign in')
  };

  const onSubmit = () => {
    if ((password === confirmPassword) && terms) {
      const userDetails = { name, username, phone, email, password, confirmPassword }
      console.log(userDetails)
      // props.signUpUser(userDetails);
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
          <StyledInput type='text' onChange={(event) => dispatch({type: SET_NAME, data: event.target.value})} />
        </div>
        <div>
          <StyledTypography text="User Name" />
          <StyledInput type='text' onChange={(event) => dispatch({type: SET_USERNAME, data: event.target.value})} />
        </div>
      </StyledBox>
      <StyledBox>
        <div>
          <StyledTypography text="Phone No." />
          <StyledInput type='phone' onChange={(event) => dispatch({type: SET_PHONE, data: event.target.value})} />
        </div>
        <div>
          <StyledTypography text="Email Id" />
          <StyledInput type='email' onChange={(event) => dispatch({type: SET_EMAIL, data: event.target.value})} />
        </div>
      </StyledBox>
      <StyledBox>
        <div>
          <StyledTypography text="Password" />
          <StyledInput type='password' onChange={(event) => dispatch({type: SET_PASSWORD, data: event.target.value})} />
        </div>
        <div>
          <StyledTypography text="Confirm Password" />
          <StyledInput type='password' onChange={(event) => dispatch({type: SET_CONFIRMPASSWORD, data: event.target.value})} />
        </div>
      </StyledBox>
      <div>
        <StyledCheckbox>
          <div>
            <Checkbox onClick={() => dispatch({ type: SET_TERMS, data: !terms })} />
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


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  signUpUser: params => dispatch(signUpUser(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
