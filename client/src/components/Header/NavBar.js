import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {  makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: "rgb(253, 38, 74)"
      
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" style = {{backgroundColor: "orange"}}>
        <Toolbar>
          <IconButton />
          <Typography style = {{fontSize: "20px", fontFamily:  "Lora, serif"}}className={classes.title} variant="h6" noWrap>
Fit N Club        
  </Typography>
          <div className = "login">
              Login
          </div>
          <div className = "signup"> Sign Up</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}