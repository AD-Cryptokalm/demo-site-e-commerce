import { GET_ORDER} from "../actions/orderAction";

const initialState = {};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDER:
        return action.payload;
        default:
            return state;
    }
}