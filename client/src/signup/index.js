import React from "react";
import SignUpForm from "../components/Signup";
import "../components/Signup/Signup.css";

function SignUp() {
  return (
    <div className="main">
      <div className="firstcontainer">
        <h1>Let's Get Started</h1>
        <p>Complete the sign up process for engaging in sports</p>
        <img
          src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
          alt="img"
        ></img>
      </div>
      <SignUpForm />
    </div>
  );
}
export default SignUp;
