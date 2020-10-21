import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// Like https://github.com/brunobertolini/styled-by





const ToggleButton = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "tranparent",
    width: "100%",
}
const Selector = {
    marginLeft: "700%",
    marginTop: "40%",
    border: "1px solid red"
}

const StyledSpan = {
    marginTop: "1.5%",
    color: "red"
}


export default function DynamicCSS() {
    const [color, setColor] = React.useState('default');

    const handleChange = (event) => {
        setColor(event.target.checked ? 'blue' : 'default');
    };

    return (
        <React.Fragment>
            <div style={ToggleButton}>
                <div>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={color === 'blue'}
                                onChange={handleChange}
                                color="primary"
                                value="dynamic-class-name"
                            />
                        }
                    />
                </div>
                <span style={StyledSpan}>Limit the no. of players</span>
                <div >
                    <select style={Selector}
                    ></select>
                </div>
            </div>
        </React.Fragment>
    );
}