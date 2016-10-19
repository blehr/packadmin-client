import { GET_USER, UPDATE_USER, CLEAR_USER } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return{ ...state, profile: action.payload };
    case UPDATE_USER:
      return { ...state, profile: action.payload };
    case CLEAR_USER:
      return { ...state, profile: {} };
    default:
      return state;
  }
}
