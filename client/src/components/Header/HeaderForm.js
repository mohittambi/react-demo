import React from "react";
import styled from "styled-components";

import { BsTrophy } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "../atoms/button/Button";

const StyledButton = styled(Button)`
  background: #c9082a;
  font-size: 20px;
  border: #c9082a;
  color: #fff;
  opacity: 1;
  margin: 40% 20% 10% 0%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 92%;
  height: 10vh;
  margin: 10% 5% 10% 2%;
`;

const headerForm = () => {
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

      <div style={{ marginRight: "20px" }}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <StyledButton label="Search"/>
          </Grid>
        </Grid>
      </div>
    </StyledForm>
  );
}
export default headerForm;
