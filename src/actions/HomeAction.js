import { NavigationActions } from 'react-navigation'
import * as types from './types';
import axios from 'react-native-axios';
import {menuListByCategories} from '../services/menuListServices';

export const menulist = ({ navigation  }) => async dispatch => {
    	try {
    		dispatch({ type: types.MENULIST_REQUEST_START })
	        let response = await menuListByCategories();
	        menulistResultSuccess(dispatch, response, navigation)
    	} catch (error) {
    		console.log(error.message);
    		dispatch({ type: types.MENULIST_FAILED })
    	}
}

const menulistResultSuccess = (dispatch, data, navigation) => {
	const { navigate } = navigation;

	dispatch({
		type: types.MENULIST_SUCCESS,
		payload: data
	})
	navigate('MenuList', { data: data })
}

const menulistResultFailed = (dispatch) => {
	dispatch({ 
		type: types.MENULIST_FAILED 
	});
}

export const addToCart = (item) => {
	return {
		type: types.ADD_ITEM,
		payload: item
	};
}