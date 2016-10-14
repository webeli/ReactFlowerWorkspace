export default function reducer(state={}, action) {
    switch(action.type) {
        case "UPDATE_SETTINGS_DELIVERY": {
            state = {...state, settingsDelivery:{...action.payload}};
            return state;
        }
        case "UPDATE_SETTINGS_ACCOUNT": {
            state = {...state, settingsAccount:{...action.payload}};
            return state;
        }
        default:
            return state;
    }
};