import React, {useReducer, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import {
	SET_GROUP_NAME,
	SET_GROUP_ID,
	SET_SELECTED_MEMBERS,
	initState,
	groupCompReducer,
} from "./helpers/group-component-state";

const GroupPage = ({ savedGroupData, ...props}) => {
	const [state, dispatch] = useReducer(
		groupCompReducer,
		{ savedGroupData },
		initState
	);

	const {
		groupName,
		groupID,
		selectedMembers,
	} = state;

	return (
		<React.Fragment>
			<Typography>Group Page</Typography>
			<TextField id="outlined-basic" label="Group Name" variant="outlined" />
		</React.Fragment>
	)
};

export default GroupPage;
