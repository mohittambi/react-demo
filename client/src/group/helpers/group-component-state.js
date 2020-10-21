export const SET_GROUP_NAME = 'SET_GROUP_NAME';
export const SET_GROUP_ID = 'SET_GROUP_ID';
export const SET_SELECTED_MEMBERS = 'SET_SELECTED_MEMBERS';

export const initState = ({ savedGroupData }) => {
	return {
		groupName:
			savedGroupData && savedGroupData.groupName ? savedGroupData.groupName : '',
		groupId:
			savedGroupData && savedGroupData.groupId ? savedGroupData.groupId : '',
		selectedMembers:
			savedGroupData && savedGroupData.selectedMembers ? savedGroupData.selectedMembers : [],
	}
}

export const groupCompReducer = (state, action) => {
	const { type, data } = action;
	switch (type) {
		case SET_GROUP_NAME:
			return {
				...state,
				groupName: data,
			}
		case SET_GROUP_ID:
			return {
				...state,
				groupID: data,
			}
		case SET_SELECTED_MEMBERS:
			return {
				...state,
				selectedMembers: data,
			}
		default:
			return state;
	}
};
