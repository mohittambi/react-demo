import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import styled from "styled-components";
import "./Footer.css";

const StyledContainer = styled.div`
  background-image: linear-gradient(
    to top,
    rgb(187, 184, 184),
    rgb(253, 247, 247)
  );
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  max-width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 auto;
  .box,
  .boxicon {
    width: 15%;
    margin-top: 40px;
    max-width: 100%;
    background-color: transparent;

    ul {
      list-style: none;
      margin-left: -37px;
      margin-top: 10px;
      li {
        line-height: 25px;
      }
    }
    .head {
      font-family: "Lora", serif;
      font-size: 20px;
      color: rgb(253, 38, 74);
      text-align: left;
    }
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
  }
`;

export default function Footer() {
  return (
    <React.Fragment>
      <StyledContainer>
        <div className="box">
          <h1 className="head">About Fit N Club</h1>
          <p>
            lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum
          </p>
        </div>
        <div className="box">
          <h1 className="head">Supports</h1>

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
          <h1 className="head">Contacts</h1>

          <p> 74th Gali raja chowk, harihar nagar old colony, Jaipur-10</p>
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
          <h1 className="head">Follow us</h1>
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
}
