import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from "./NavBar"
import HeaderForm from "./HeaderForm"
import "../../styles/Header/Header.css"
import HeaderContent from './HeaderContent';
function Header() {
  return (
    <React.Fragment>

        <NavBar />
        <HeaderContent />
        <HeaderForm />
      

    </React.Fragment>
  );
}
export default Header