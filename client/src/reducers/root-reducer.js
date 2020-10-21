import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import signup from '../components/Signup/store/reducer';

export const createRootReducer = history => combineReducers({
	router: connectRouter(history),
	signup,
});

export default createRootReducer;
