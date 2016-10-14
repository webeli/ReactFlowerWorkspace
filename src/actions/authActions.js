import * as firebase from 'firebase';
import { push } from 'react-router-redux';

export function updateAuthData(data) {
    return {
        type: 'UPDATE_USER_DATA',
        payload: data
    }
}

export function registerUser(name, email, password) {
    return function(dispatch) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(user){
                const floristRef = firebase.database().ref("florists").child(user.uid).child("settings_account");
                floristRef.set({ name: name });
                dispatch(updateAuthData(user));
            }).catch(function(error) {
                console.log("error", error);
        });
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
            dispatch(updateAuthData(user));
            const state = getState();
            const loginPage = state.routing.locationBeforeTransitions.pathname === "/";
            const registerPage = state.routing.locationBeforeTransitions.pathname === "/register";

            if (user) {
                if (loginPage || registerPage) {
                    dispatch(push('/dashboard'));
                }
            } else if (!user) {
                dispatch(push('/'));
            }
        });

    }
}