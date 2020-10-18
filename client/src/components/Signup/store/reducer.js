import { Map } from 'immutable';

import {
	USER_SIGN_UP_REQUEST,
	USER_SIGN_UP_RESPONSE,
	USER_SIGN_UP_DATA,
} from './types';

// TODO: Auto logout functionality
const AUTH_LOGOUT = 'AUTH_LOGOUT';
const CLEAR_DATA = 'CLEAR_DATA';

const initialState = Map({
	isLoading: false,
	userData: null,
});

const signup = (state = initialState, action) => {
	switch (action.type) {
		case USER_SIGN_UP_DATA:
			return state.set('userData', action.data);
		case USER_SIGN_UP_REQUEST:
			return state.set('isLoading', true);
		case USER_SIGN_UP_RESPONSE:
			return state.set('isLoading', false);
		case AUTH_LOGOUT:
		case CLEAR_DATA:
			return state.set('userData', null);
		default:
			return state;
	}
};

export default signup;
