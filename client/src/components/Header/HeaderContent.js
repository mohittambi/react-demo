import React from "react";
import Button from "@material-ui/core/Button";
import "./HeaderContent.css";
import HeaderForm from "./HeaderForm";
import NavBar from "./NavBar";
import styled from "styled-components";

const StyledButton = styled(Button)`
font-size: 15px,
width: 200px,
height: 40px,
word-spacing: 8px,
`;

function HeaderContent() {
  return (
    <>
      <NavBar />
      <div className="header">
        <div className="header-left">
          <h1> Sports Engagement Platform</h1>
          <p>
            <div className="vl">
              Create or join event to build local community <br />
              for daily sport
            </div>
          </p>

          <StyledButton variant="contained" color="secondary">
            Create Group
          </StyledButton>
        </div>
        <div className="header-img">
          <img
            src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
            alt="img"
          ></img>
        </div>
      </div>
      <HeaderForm />
    </>
  );
}
export default HeaderContent;
