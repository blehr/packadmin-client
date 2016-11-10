import { GET_USER, UPDATE_USER, UNAUTH_USER } from '../actions';

export default function (state = { profile: {} }, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, profile: action.payload };
    case UPDATE_USER:
      return { ...state, profile: action.payload };
    case UNAUTH_USER:
      return { ...state, profile: {} };
    default:
      return state;
  }
}
