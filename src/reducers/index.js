import { combineReducers } from 'redux';
import products from './productsReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    products,
    routing: routerReducer
});