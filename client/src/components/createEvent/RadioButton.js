import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';



const StyledRadio = {
    display: "flex",
    flexDirection: "row",
}

export default function RadioButtonsGroup() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset"  >
            <RadioGroup style={StyledRadio} value={value} onChange={handleChange}>
                <FormControlLabel value="Public" control={<Radio />} label="Public Event" />
                <FormControlLabel value="Private" control={<Radio />} label="Private Event" />
            </RadioGroup>
        </FormControl>
    );
}
