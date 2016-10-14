import * as firebase from 'firebase';

// Load All Projects
export function loadAllProjectsSuccess(projects) {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: projects
    }
}
export function getProducts(uid) {
    return function(dispatch) {

    }
}

export function addProduct(uid, data) {
    return function() {
        const productsRefs = firebase.database().ref('florist').child(uid).child('productsRefs');
        const productKey = productsRefs.push().key;
        productsRefs.child(productKey).set(productKey);

        console.log("Added produkt!"); // TODO: implement toaster service
    }
}

export function updateProduct(uid) {
    return function(dispatch) {

    }
}