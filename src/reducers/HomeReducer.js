import * as types from '../actions/types';

var _ = require('lodash');

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: '',
  cartData: {},
}; 

export default (state=INITIAL_STATE, action) => {
	  switch (action.type) {

	  	case types.MENULIST_REQUEST_START:
      		return { ...state, loading:true, error: '' };

      	case types.MENULIST_SUCCESS:
          
          const newItems = _.mapKeys(action.payload, 'name')

      		return { ...state, data: newItems, loading:false, error: 'Success' };

        case types.UPDATE_ITEM: 
           const name = action.payload.name
           return { ...state, [...state.cartData.name]: action.payload  }


        case types.DELETE_ITEM:
          return _.omit(state, [state.cartData.action.payload.name]: action.payload)


	  	case types.MENULIST_FAILED:
      		return { ...state, data: {}, loading:false, error: 'Request failed' };

      	default:
      		return state;
	  }
}