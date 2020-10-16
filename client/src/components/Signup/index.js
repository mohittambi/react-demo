import React from "react";
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
  margin-left: 15%;
  .header {
    text-align: right;
    margin-top: 5%;
    max-width: 100%;
    margin-right: 8%;
    a {
      text-decoration: none;
    }
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
      margin-left: 1%;
      font-size: 1.3rem;
      margin-top: 2.5%;

      font: normal normal medium 20px/24px Barlow;
      letter-spacing: 0px;
      color: #17408b;
    }
  }
`;

const StyledTypography = {
  marginBottom: "0.5%",
  width: "200px",
  height: "40px",
  border: "none",
  marginLeft: "5% ",
  color: "#003b6f",
};

const StyledCreateButton = {
  background: "#C9082A 0% 0% no-repeat padding-box",
  color: "#fff",
  padding: "7px 14px",
  marginLeft: "5%",
  fontSize: "1.2rem",
  marginTop: "3%",
  border: "none",
};

const StyledInput = {
  border: "none",
  color: "#003b6f",
  width: "290px",
  marginLeft: "10px",
  borderRadius: "7px",
  height: "60%",
};

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

function SignUpForm() {
  return (
    <StyledSecondcontainer>
      <div className="header">
        <a href="login">
          Already a memeber? <b style={{ color: "#003b6f" }}>Sign in</b>
        </a>
      </div>
      <form>
        <StyledBox>
          <div>
            <Typography style={StyledTypography} text="Name" />
            <Input style={StyledInput} />
          </div>
          <div>
            <Typography style={StyledTypography} text="User Name" />
            <Input style={StyledInput} />
          </div>
        </StyledBox>
        <StyledBox>
          <div>
            <Typography style={StyledTypography} text="Phone No." />
            <Input style={StyledInput} />
          </div>
          <div>
            <Typography style={StyledTypography} text="Email Id" />
            <Input style={StyledInput} />
          </div>
        </StyledBox>
        <StyledBox>
          <div>
            <Typography style={StyledTypography} text="Password" />
            <Input style={StyledInput} />
          </div>
          <div>
            <Typography style={StyledTypography} text="Confirm Password" />
            <Input style={StyledInput} />
          </div>
        </StyledBox>
        <div>
          <StyledCheckbox>
            <div>
              <Checkbox />
            </div>
            <p>
              By registring on this website you agree to our Terms of services
              and privacy policy
            </p>
          </StyledCheckbox>
          <Button style={StyledCreateButton}>Create Account</Button>
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
