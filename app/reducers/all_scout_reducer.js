import { GET_ALL_SCOUTS, API_ERROR, CLEAR_ALL_SCOUTS } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_SCOUTS:
      return { ...state, scouts: action.payload.data };
    case CLEAR_ALL_SCOUTS:
      return { ...state, scouts: [] };
    case API_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
