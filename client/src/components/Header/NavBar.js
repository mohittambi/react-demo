import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../../styles/Header/NavBar.css";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "rgb(253, 38, 74)",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "rgb(253, 247, 247)", marginLeft: "8px" }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgb(250, 246, 246)",
          borderBottom: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton />
          <Typography
            style={{ fontSize: "20px", fontFamily: "Lora, serif" }}
            className={classes.title}
            variant="h6"
            noWrap
          >
            Fit N Club
          </Typography>
          <div>
            <a className="login" href="#">
              Login
            </a>
          </div>
          <div>
            <a className="signup" href="#">
              SignUp
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
