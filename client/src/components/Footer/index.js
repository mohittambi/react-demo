import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";


const StyledContainer = styled.div`
   {

    background: #F5F5F5 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: space-around;


    .footerCopyright {
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
  }
`;

const StyledTypography = styled.h2`
  color: #c9082a;
`;
const StyledContent = {
  color: "#7D7D7D"
}
const Box = {
  display: "flex",
  flexDirection: "column",
  width: "15%",
  marginTop: "40px"

}

const BoxIcon = {
  width: "20%",
  marginLeft: "5%",
  width: "15%",
  marginTop: "40px",
  textAlign: "center"

}
const Icon = {
  fontSize: "2.5rem",
  padding: "10px"
}
const StyledLink = {


  textDecoration: "none",
  fontSize: "1rem",
  color: "#7D7D7D"


}

const StyledFooter = {
  color: "white",
  textDecoration: "none",
  fontSize: "1rem"
}




const Footer = () => {
  return (
    <>
      <StyledContainer>
        <div style={Box} >
          <StyledTypography>About Fit N Club</StyledTypography>
          <Typography style={StyledContent}>
            lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum
          </Typography>
        </div>
        <div style={Box} >
          <StyledTypography>Supports</StyledTypography>

          <a href="#" style={StyledLink}>Centers</a>

          <a href="#" style={StyledLink}>FAQ's</a>
          <a href="#" style={StyledLink}>Help</a>
          <a href="#" style={StyledLink}>Feedback</a>

        </div>
        <div style={Box} >
          <StyledTypography>Contacts</StyledTypography>

          <Typography style={StyledContent}>
            74th Gali raja chowk, harihar nagar old colony, Jaipur-10
          </Typography>
          <a href="#" style={StyledLink}>+9924447684</a>
          <a href="#" style={StyledLink}>+9924447684</a>

        </div>
        <div style={BoxIcon} >
          <StyledTypography>Follow us</StyledTypography>
          <a href="#" style={StyledLink}>
            <FaFacebook style={Icon} />
          </a>
          <a href="#" style={StyledLink}>
            <FiTwitter style={Icon} />
          </a>
          <a href="#" style={StyledLink}>
            <FiInstagram style={Icon} />
          </a>
        </div>

        <div className="footerCopyright">
          <a href="#" style={StyledFooter}>
            @Copyright Reserve {new Date().getFullYear()}
          </a>
          <a href="#" style={StyledFooter}>
            Term & Conditions
          </a>
          <a href="#" style={StyledFooter}>
            Privacy and Policy
          </a>
        </div>
      </StyledContainer>
    </>
  );
};

export default Footer;
