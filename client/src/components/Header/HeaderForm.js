import React from "react";
import Grid from "@material-ui/core/Grid";

import { BsTrophy } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "../atoms/button/Button";

const StyledButton = styled(Button)`
  background: white;
  font-size: 20px;
  font: normal normal medium 21px/25px Barlow;
  letter-spacing: 0px;
  color: #c9082a;
  opacity: 1;
  border: 1px solid #c9082a;
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

      <div style={{ marginRight: "20px" }}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <StyledButton>Search</StyledButton>
          </Grid>
        </Grid>
      </div>
    </StyledForm>
  );
}
export default HeaderForm;
