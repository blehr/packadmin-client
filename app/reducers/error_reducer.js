import { CLEAR_ERROR, SET_ERROR } from '../actions/index';

export default function (state = '', action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return '';
    default:
      return state;
  }
}
