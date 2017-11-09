import * as types from '../actions/types';

var _ = require('lodash');

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: '',
  cartData: {}, // Object based storage instead of Array.
}; 

export default (state=INITIAL_STATE, action) => {
	  switch (action.type) {

	  	case types.MENULIST_REQUEST_START:
      		return { ...state, loading:true, error: '' };

      case types.MENULIST_SUCCESS:
          const newItems = _.mapKeys(action.payload, 'name')
      		return { ...state, data: newItems, loading:false, error: 'Success' };

      case types.ADD_ITEM:
          return { ...state, cartData: {...state.cartData, ...action.payload}  }

      case types.EDIT_ITEM:
           //...state, [state.cartData.name]: action.payload
           return { ...state, cartData: {...state.cartData, ...action.payload} }
    
      // case types.REMOVE_ITEM:
      //   let newState = Object.keys(state.cartData).reduce((r, e) => {
      //     if(!action.payload[e]) r[e] = state.cartData[e];
      //     return r
      //   }, {})
  
      //   return {...state, cartData: newState}

      case types.REMOVE_ITEM:
        return _.omit(state, state.cartData[action.payload.name]: action.payload)

	  	case types.MENULIST_FAILED:
      		return { ...state, data: {}, loading:false, error: 'Request failed' };

      	default:
      		return state;
	  }
}