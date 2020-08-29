import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import './App.css';


const App = () => {
  const history = useHistory();

  const openForm = () => {
    let path = `add`;
    history.push(path);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Create a schedule
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={openForm}
        >
          Add Form
        </Button>
      </header>
    </div>
  );
}

export default App;
