import { GET_ALL_SCOUTS, CLEAR_ALL_SCOUTS } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_SCOUTS:
      return { ...state, scouts: action.payload.data };
    case CLEAR_ALL_SCOUTS:
      return { ...state, scouts: [] };
    default:
      return state;
  }
}
