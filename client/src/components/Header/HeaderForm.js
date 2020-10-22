import React from "react";
import styled from "styled-components";

import { BsTrophy } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "../atoms/button/Button";


import Form from "@material-ui/core/FormControl"

const SearchButton = {
  background: "white",
  fontSize: "20px",
  border: " 1px solid #c9082a",
  color: "#c9082a",
  margin: "40% 20% 10% 0%"
}

const StyledForm = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  background: "#ffffff 0% 0% no-repeat padding-box",
  width: "92%",
  height: "10vh",
  margin: "10% 5% 10% 2%",
}

const headerForm = () => {
  return (
    <Form style={StyledForm}>
      <div style={{ marginLeft: "20px" }}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <BsTrophy style={{ color: "#A2A2A2" }} />
          </Grid>
          <Grid item>
            <TextField label="Sport" />
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <GoLocation style={{ color: "#A2A2A2" }} />
          </Grid>
          <Grid item>
            <TextField label="Location" />
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AiTwotoneCalendar style={{ color: "#A2A2A2" }} />
          </Grid>
          <Grid item>
            <TextField label="Date" />
          </Grid>
        </Grid>
      </div>

      <div style={{ marginRight: "20px" }}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Button style={SearchButton} label="Search" />
          </Grid>
        </Grid>
      </div>
    </Form>
  );
}
export default headerForm;
