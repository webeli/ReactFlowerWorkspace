export default function reducer(state={}, action) {
    switch(action.type) {
        case "UPDATE_SETTINGS_DELIVERY": {
            state = {settingsDelivery:{...action.payload}};
            return state;
        }
        default:
            return state;
    }
};