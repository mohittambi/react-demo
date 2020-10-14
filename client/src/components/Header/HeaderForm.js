import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { BsTrophy } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import "./HeaderForm.css";
import styled from "styled-components";

const StyledSearchButton = styled.button`
  background-color: rgb(253, 38, 74);
  color: #fff;

  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-right: 20px;
  padding: 7px 14px;
  border-radius: 0px;
  font-size: 1.2rem;
  margin-top: 15%;
  border: none;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  width: 92%;
  margin-left: 35px;
  height: 10vh;
  margin-right: 5%;
`;

function HeaderForm() {
  return (
    <StyledForm>
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
            <StyledSearchButton>Search</StyledSearchButton>
          </Grid>
        </Grid>
      </div>
    </StyledForm>
  );
}
export default HeaderForm;
