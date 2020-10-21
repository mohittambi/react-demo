import React from "react";
import APIClient from './auth/api';

import {
	USER_SIGN_UP_REQUEST,
	USER_SIGN_UP_RESPONSE,
	USER_SIGN_UP_DATA,
} from './types';

import {
	SIGN_UP_USER
} from '../utils/endpoints';

export const signUpUser = params => dispatch => {
	dispatch({ type: USER_SIGN_UP_REQUEST });
	dispatch({ type: USER_SIGN_UP_DATA, data: null });

	const apiClient = new APIClient();
	return apiClient
		.request(SIGN_UP_USER, params)
		.then(({ data }) => {
			dispatch({ type: USER_SIGN_UP_RESPONSE, data });
			dispatch({ type: USER_SIGN_UP_DATA });
		})
		.catch(({ message }) => {
			dispatch({ type: USER_SIGN_UP_RESPONSE });
			dispatch(addFlashMessage({ message: message }));
		});
};
