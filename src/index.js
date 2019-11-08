import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import bugsReducer from './reducers/bugs-reducers';
import calculatorReducer from './reducers/calculator-reducer';
import postsReducer from './reducers/posts-reducer';

let allReducers = combineReducers({
	bugs: bugsReducer,
	calculator: calculatorReducer,
	posts: postsReducer
});

import './index.css';

let store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
