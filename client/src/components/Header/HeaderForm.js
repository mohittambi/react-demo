import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { BsTrophy } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import "../../styles/Header/HeaderForm.css";
function HeaderForm() {
  return (
    <div className="form">
      <div style={{ marginLeft: "20px" }}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <BsTrophy style={{ color: "grey" }} />
          </Grid>
          <Grid item>
            <TextField label="Sport" />
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <GoLocation style={{ color: "grey" }} />
          </Grid>
          <Grid item>
            <TextField label="Location" />
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AiTwotoneCalendar style={{ color: "grey" }} />
          </Grid>
          <Grid item>
            <TextField label="Date" />
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "white",
                borderRadius: "0px",
                border: "1px solid rgb(253, 38, 74)",
                width: "150px",
                color: "rgb(253, 38, 74)",
                marginTop: "17px",
                marginBottom: "5px",
                marginRight: "20px",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default HeaderForm;
