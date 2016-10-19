import * as firebase from 'firebase';
import { reset } from 'redux-form';

// Load All Projects
export function loadAllProjectsSuccess(projects) {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: projects
    }
}
export function getProducts(uid) {
    return function(dispatch) {
        const productsRefs = firebase.database().ref('florists').child(uid).child('products');
        productsRefs.on('value', (snap) => {
            dispatch({
                type: 'UPDATE_PRODUCTS',
                payload: snap.val()
            });
        });
    }
}

export function addProduct(uid, data) {
    return function(dispatch) {
        const productsRefs = firebase.database().ref('florists').child(uid).child('products');

        const colors = Object.assign(...data.colors.map(color => ({[color.value]: true})));
        const types = Object.assign(...data.types.map(type => ({[type.value]: true})));
        const events = Object.assign(...data.events.map(event => ({[event.value]: true})));

        const newProduct = {
            description:data.description || '',
            image:data.image || '',
            name:data.name || '',
            price:data.price || '',
            attributes:{colours:colors, types:types, events:events}
        };

        productsRefs.push(newProduct);

        //Clear NewProductForm
        dispatch(reset('NewProductForm'));
        console.log("Added produkt!"); // TODO: implement toaster service
    }
}

export function updateProduct(uid) {
    return function(dispatch) {

    }
}