import React from "react";
import Typography from "@material-ui/core/Typography";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <React.Fragment>
      <Typography className="container">
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
        <div className="box" style={{ textAlign: "center" }}>
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
      </Typography>
    </React.Fragment>
  );
}
