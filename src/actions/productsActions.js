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
        const productsRefs = firebase.database().ref('florists').child(uid).child('products');
        productsRefs.on('value', (snap) => {
            console.log(snap.val());
            dispatch({
                type: 'UPDATE_PRODUCTS',
                payload: snap.val()
            });
        });
    }
}

export function addProduct(uid, data) {
    return function() {
        const productsRefs = firebase.database().ref('florists').child(uid).child('products');
        productsRefs.push({...data});

        console.log("Added produkt!"); // TODO: implement toaster service
    }
}

export function updateProduct(uid) {
    return function(dispatch) {

    }
}