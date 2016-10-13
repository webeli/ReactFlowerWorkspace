export default function reducer(state={}, action) {
    switch(action.type) {
        case "UPDATE_PRODUCTS": {
            state = {...action.payload};
            return state;
        }
        default:
            return state;
    }
};
