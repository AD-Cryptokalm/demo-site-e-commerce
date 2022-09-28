import { GET_PRODUCT} from "../actions/productAction";

const initialState = {};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
        return action.payload;
        default:
            return state;
    }
}