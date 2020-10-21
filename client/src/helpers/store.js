import { routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createRootReducer } from '../reducers/root-reducer';

const enhancers = [];
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
	const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
	if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
		enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
	}
}

const history = createBrowserHistory();

const store = createStore(
	createRootReducer(history),
	undefined,
	compose(
		applyMiddleware(
			thunk,
			...middlewares,
			routerMiddleware(history)
		),
		...enhancers
	)
);

export { store, history };
