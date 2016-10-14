import * as firebase from 'firebase';


export function getSettingsDelivery(uid) {
    return function(dispatch) {
        const settingsDeliveryRef = firebase.database().ref('florist').child(uid).child('settingsDelivery');
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
        const settingsDeliveryRef = firebase.database().ref('florist').child(uid).child('settingsDelivery');
        settingsDeliveryRef.set({...data});
        console.log("Updated settings delivery!"); // TODO: implement toaster service
    }
}