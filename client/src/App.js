import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Login from "./login";
import Footer from "./components/Footer";
import Home from "./home";

const App = () => {
  const history = useHistory();

  const openForm = () => {
    let path = `add`;
    history.push(path);
  };

  return (
    <>
      <Home />
      <Footer />
    </>
  );
};

export default App;
