import { GET_USER, UPDATE_USER, UNAUTH_USER } from '../actions';

export default function (state = { profile: { name: '', packNumber: '', customDens: [] } }, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, profile: action.payload };
    case UPDATE_USER:
      return { ...state, profile: action.payload };
    case UNAUTH_USER:
      return { ...state, profile: { name: '', packNumber: '', customDens: [] } };
    default:
      return state;
  }
}
