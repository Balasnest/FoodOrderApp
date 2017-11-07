import { combineReducers } from 'redux';
import navReducer from './navReducer';
import HomeReducer from './HomeReducer';

export default combineReducers ({
	nav: navReducer,
	home: HomeReducer
});