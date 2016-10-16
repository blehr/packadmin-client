import { GET_ALL_SCOUTS, API_ERROR } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_SCOUTS:
      return action.payload;
    case API_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
