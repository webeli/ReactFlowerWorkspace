import * as firebase from 'firebase';

// Load All Projects
export function loadAllProjectsSuccess(projects) {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: projects
    }
}
export function getAllProducts(floristId) {
    return function(dispatch) {
        firebase.database().ref(floristId).child('products').on('value', (snap) => {
            dispatch(loadAllProjectsSuccess(snap.val()));
    });
    }
}