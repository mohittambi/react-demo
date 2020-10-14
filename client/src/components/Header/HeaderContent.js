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

const Styleddiv = styled.div`
  height: auto !important;
  background-image: linear-gradient(
    to top,
    rgb(187, 184, 184),
    rgb(253, 247, 247)
  );
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 85px;
  margin-top: 10px;
  width: 95%;
  max-width: 100%;

  div:first-child {
    width: 49%;
    background-color: transparent;

    h2 {
      margin-left: 0px;
      background-color: transparent;
      font-size: 50px;
      letter-spacing: 2px;
      word-spacing: 5px;
    }
    h2 + p {
      background-color: transparent;
      margin-top: 10%;
      color: #003366;
    }
    p {
      font-size: 20px;
      letter-spacing: 0px;
      word-spacing: 0px;
    }

    .vl {
      border-left: 4px solid rgb(253, 38, 74);
      height: 55px;
      padding: 5px;
    }
  }
`;

const StyledImage = styled.div`
  margin-top: 5%;
  margin-left: 35px;
  width: 45%;
  background-color: transparent;
  margin-right: 5px;
`;

function HeaderContent() {
  return (
    <Styleddiv>
      <NavBar />
      <StyledHeader>
        <div>
          <h2> Sports Engagement Platform</h2>
          <p>
            <div className="vl">
              Create or join event to build local community for daily sport
            </div>
          </p>

          <StyledButton variant="contained" color="secondary">
            Create Group
          </StyledButton>
        </div>
        <StyledImage>
          <img
            src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
            alt="img"
            width="100%"
          />
        </StyledImage>
      </StyledHeader>
      <HeaderForm />
    </Styleddiv>
  );
}
export default HeaderContent;
