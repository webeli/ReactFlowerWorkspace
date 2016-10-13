import { combineReducers } from 'redux';

import products from './productsReducer';
import auth from './authReducer';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
    products,
    auth,
    routing: routerReducer
});