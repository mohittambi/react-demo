import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./main";

const App = () => {
  const history = useHistory();

  const openForm = () => {
    let path = `add`;
    history.push(path);
  };

  return (
    <>
      <Main />
      <Footer />
    </>
  );
};

export default App;
