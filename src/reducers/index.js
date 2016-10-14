import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import products from './productsReducer';
import auth from './authReducer';
import settings from './settingsReducer';

export default combineReducers({
    products,
    auth,
    settings,
    routing: routerReducer,
    form: formReducer
});