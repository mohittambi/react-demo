import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      textAlign: "left",
      color: "#C9082A",
      opacity: "1",
    },
  },
}));

const StyledNav = styled.div`
  margin-left: 8px;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #ffffff !important;
  box-shadow: none !important;
  width: 1005px;
  height: 58px;

  .login,
  .signup {
    text-decoration: none;
    color: #C9082A;
    opacity: 1;
    }
  .signup {
    margin-left: 20px;
    margin-right: 60px;

  }
}
`;

export default function NavBar() {
  const classes = useStyles();

  return (
    <StyledNav>
      <StyledAppBar>
        <Toolbar>
          <IconButton />
          <Typography className={classes.title} variant="h6" noWrap>
            Fit N Club
          </Typography>
          <div>
            <a className="login" href="./login">
              Login
            </a>
          </div>
          <div>
            <a className="signup" href="./sign-up">
              Sign Up
            </a>
          </div>
        </Toolbar>
      </StyledAppBar>
    </StyledNav>
  );
}
