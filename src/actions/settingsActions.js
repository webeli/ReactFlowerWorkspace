import * as firebase from 'firebase';

export function getSettingsAccount(uid) {
    return function(dispatch) {
        const settingsDeliveryRef = firebase.database().ref('florists').child(uid).child('settings_account');
        settingsDeliveryRef.on('value', (snap) => {
            dispatch({
                type: 'UPDATE_SETTINGS_ACCOUNT',
                payload: snap.val()
            });
        });
    }
}

export function updateSettingsAccount(uid, data) {
    return function() {
        const settingsAccountRef = firebase.database().ref('florists').child(uid).child('settings_account');
        settingsAccountRef.set({...data});
        console.log("Updated settings account!"); // TODO: implement toaster service
    }
}

export function getSettingsDelivery(uid) {
    return function(dispatch) {
        const settingsDeliveryRef = firebase.database().ref('florists').child(uid).child('settings_delivery');
        settingsDeliveryRef.on('value', (snap) => {
            dispatch({
                type: 'UPDATE_SETTINGS_DELIVERY',
                payload: snap.val()
            });
        });
    }
}

export function updateSettingsDelivery(uid, data) {
    return function() {
        const settingsDeliveryRef1 = firebase.database().ref('florists').child(uid).child('settings_delivery');
        settingsDeliveryRef1.set({...data});
        const settingsDeliveryRef2 = firebase.database().ref('settings_delivery').child(uid);
        settingsDeliveryRef2.set({...data});
        console.log("Updated settings delivery!"); // TODO: implement toaster service
    }
}