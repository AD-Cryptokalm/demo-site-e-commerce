import { GET_USER, UPDATE_ADRESS, UPDATE_EMAIL, UPDATE_TEL } from "../actions/userAction";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
      case UPDATE_ADRESS:
        return {
          ...state,
          adress: action.payload,
        }
        case UPDATE_TEL:
          return {
            ...state,
            tel: action.payload
          }
    default:
      return state;
  }
}
