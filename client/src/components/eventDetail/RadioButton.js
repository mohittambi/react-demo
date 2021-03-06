import React from 'react';
import styled from 'styled-components';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const StyledRadio = styled(RadioGroup)`
	display: flex;
	flexDirection: row;
	width: 900px;
`;

export default function RadioButtonsGroup() {
	const [value, setValue] = React.useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<FormControl component="fieldset">
			<StyledRadio value={value} onChange={handleChange}>
				<FormControlLabel value="Public" control={<Radio />} style={{ width: "50%" }} label="Public Event" />
				<FormControlLabel value="Private" control={<Radio />} label="Private Event" />
			</StyledRadio>
		</FormControl>
	);
}
