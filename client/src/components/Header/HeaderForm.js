import React from "react"

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { BsTrophy } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";

function HeaderForm(){
    return(
        <div className= "form">
                         <div >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <BsTrophy />
          </Grid>
          <Grid item>
            <TextField  label="Sport"  />
          </Grid>
        </Grid>
      </div>

      <div >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <GoLocation />
          </Grid>
          <Grid item>
            <TextField label="Location"  />
          </Grid>
        </Grid>
      </div>

      <div >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AiTwotoneCalendar />
          </Grid>
          <Grid item>
            <TextField label="Date"  />
          </Grid>
        </Grid>
      </div>

      <div >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Button variant="contained" color="primary">
        Search
      </Button>
          </Grid>
        </Grid>
      </div>


            
        </div>
    )
}
export default HeaderForm