import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "space-between",
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                        label="Host need to accept invite"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                        label="Attendance required"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                        label="Sources"
                    />
                </FormGroup>
            </FormControl>
            <FormControl required error={error} component="fieldset" className={classes.formControl} style={{ marginRight: "30%" }}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox onChange={handleChange} />}
                        label="Host need to accept invite"
                    />
                    <FormControlLabel
                        control={<Checkbox onChange={handleChange} />}
                        label="Attendance required"
                    />
                    <FormControlLabel
                        control={<Checkbox onChange={handleChange} />}
                        label="Sources"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}
