import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: rgb(253, 38, 74);
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  border-radius: 0px;
  margin-left: 5%;
  font-size: 1.2rem;
  margin-top: 3%;
`;

function SignUpForm() {
  return (
    <div className="secondcontainer">
      <div className="header">
        <a href="signin">
          Already a memeber? <b style={{ color: "#003b6f" }}>Sign in</b>
        </a>
      </div>
      <form>
        <div className="box1">
          <div>
            <h3>Name</h3>
            <input />
          </div>
          <div>
            <h3>User Name</h3>
            <input />
          </div>
        </div>
        <div className="box">
          <div>
            <h3>Phone No.</h3>
            <input />
          </div>
          <div>
            <h3>Email Id</h3>
            <input />
          </div>
        </div>
        <div className="box">
          <div>
            <h3>Password</h3>
            <input />
          </div>
          <div>
            <h3>Confirm Password</h3>
            <input />
          </div>
        </div>
        <div className="box2">
          <div className="checkboxfooter">
            <div className="icon">
              <Checkbox />
            </div>
            <p>
              By registring on this website you agree to our Terms of services
              and privacy policy
            </p>
          </div>
          <StyledButton>Create Account</StyledButton>
        </div>
      </form>

      <div className="signupgoogle">
        <FcGoogle className="googleicon" />
        <div className="signup">Sign up with Google</div>
      </div>
    </div>
  );
}
export default SignUpForm;
