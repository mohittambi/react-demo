import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import styled from "styled-components";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";

const StyledTypography = styled.h2`
  font: normal normal medium 25px/30px Barlow;
  letter-spacing: 0px;
  color: #c9082a;
`;

const StyledContainer = styled.div`
   {
    background: #efefef 0% 0% no-repeat padding-box;
    opacity: 0.6;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: space-around;

    .box,
    .boxicon {
      width: 15%;
      margin-top: 40px;
      max-width: 100%;
    }
    .boxicon {
      width: 20%;
      margin-left: 5%;
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
      font-size: 15px;
      color: rgb(100, 100, 100);
    }

    .footer-copyright {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: rgb(253, 38, 74);
      width: 100%;
      height: 10vh;
      justify-content: space-around;
      align-items: center;
      margin-top: 5%;
      a {
        color: white;
        font-size: 20px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <React.Fragment>
      <StyledContainer>
        <div className="box">
          <StyledTypography>About Fit N Club</StyledTypography>
          <Typography>
            lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum
          </Typography>
        </div>
        <div className="box">
          <StyledTypography>Supports</StyledTypography>
          <ul>
            <li>
              <a href="#">Centers</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <StyledTypography>Contacts</StyledTypography>

          <Typography>
            74th Gali raja chowk, harihar nagar old colony, Jaipur-10
          </Typography>
          <ul>
            <li>
              <a href="#">+9924447684</a>
            </li>
            <li>
              <a href="#">+9924447684</a>
            </li>
          </ul>
        </div>
        <div className="boxicon" style={{ textAlign: "center" }}>
          <StyledTypography>Follow us</StyledTypography>
          <a href="#">
            <FaFacebook className="icon1" />
          </a>
          <a href="#">
            <FiTwitter className="icon2" />
          </a>
          <a href="#">
            <FiInstagram className="icon3" />
          </a>
        </div>

        <div className="footer-copyright">
          <a href="#" className="footer">
            @Copyright Reserve {new Date().getFullYear()}
          </a>
          <a href="#" className="footer">
            Term & Conditions
          </a>
          <a href="#" className="footer">
            Privacy and Policy
          </a>
        </div>
      </StyledContainer>
    </React.Fragment>
  );
};

export default Footer;
