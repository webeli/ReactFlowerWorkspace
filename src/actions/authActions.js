import * as firebase from 'firebase';
import { push } from 'react-router-redux';

export function updateAuthData(data) {
    return {
        type: 'UPDATE_USER_DATA',
        payload: data
    }
}

export function loginUser(email, password) {
    return function(dispatch, getState) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(success){
            dispatch(updateAuthData(success));
        }).catch(function(error) {
            console.log('ERROR: ', error);
        });
    }
}

export function signOutUser() {
    return function(dispatch, getState) {
        firebase.auth().signOut().then(function(success){
            dispatch(updateAuthData(success));
        });
    }
}

export function onAuthStateChanged() {
    return function(dispatch, getState) {
        firebase.auth().onAuthStateChanged(function(user) {
            //const state = getState();
            //&& state.routing.locationBeforeTransitions.pathname === "/"
            if (user) {
                dispatch(push('/dashboard'));
            } else if (!user) {
                dispatch(push('/'));
            }
        });

    }
}