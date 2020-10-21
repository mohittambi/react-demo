export const SET_NAME = 'SET_NAME';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PHONE = 'SET_PHONE';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRMPASSWORD = 'SET_CONFIRMPASSWORD';
export const SET_TERMS = 'SET_TERMS';

export const initState = () => {
	return {
		name: '',
		username: '',
		phone: '',
		email: '',
		password: '',
		confirmPassword: '',
		terms: false,
	}
};

export const signUpReducer = (state, action) => {
	const { type, data } = action;
	switch (type) {
		case SET_NAME:
			return {
				...state,
				name: data,
			}
		case SET_USERNAME:
			return {
				...state,
				username: data,
			}
		case SET_PHONE:
			return {
				...state,
				phone: data,
			}
		case SET_EMAIL:
			return {
				...state,
				email: data,
			}
		case SET_PASSWORD:
			return {
				...state,
				password: data,
			}
		case SET_CONFIRMPASSWORD:
			return {
				...state,
				confirmPassword: data,
			}
		case SET_TERMS:
			return {
				...state,
				terms: data,
			}
	}
}