import { API_ERROR, CLEAR_API_ERROR, AUTH_ERROR } from '../actions/index';

export default function (state = '', action) {
  switch (action.type) {
    case API_ERROR:
      return action.payload;
    case CLEAR_API_ERROR:
      return '';
    case AUTH_ERROR:
      return action.payload;
    default:
      return state;
  }
}
