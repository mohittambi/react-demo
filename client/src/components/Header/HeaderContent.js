import React from "react";
import HeaderForm from "./HeaderForm";
import NavBar from "./NavBar";
import styled from "styled-components";
import Button from "../atoms/button/Button";
import Colors from "../Util/constants";

const Styleddiv = styled.div`
  width: 100%;
  background: transparent linear-gradient(180deg, #ffffff 0%, #dcdcdc 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  height: auto;
`;

const StyledButton = styled(Button)`
  background: #c9082a 0% 0% no-repeat padding-box;
  width: 25%;
  height:  12%;
  fontSize: 20px;
  color: ${Colors.white};
  opacity: 1;
  border: none;
  marginTop: 5%;
`;

const StyledHeader = styled.div`
  text-align: left;
  color: #17408b;
  opacity: 1;
  margin-top: 4rem;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  div:first-child {
    width: 50%;
    h2 {
      line-height: 70px;

    }
    p {
      text-align: left;
      color: #17408b;
      opacity: 1;
    }

    .vl {
      border-left: 3px solid rgb(253, 38, 74);
      height: 40px;
      padding: 3px;
    }
  }
`;

const StyledImage = styled.div`
  margin-left: 35px;
  width: 42%;
  background-color: transparent;
  margin-right: 5px;
`;

const HeaderContent = () => {
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

          <StyledButton label="Create Group"/>
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
