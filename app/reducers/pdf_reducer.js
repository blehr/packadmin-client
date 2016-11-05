import { CREATE_PDF, CLEAR_ERROR } from '../actions/index';

export default function (state = '', action) {
  switch (action.type) {
    case CREATE_PDF:
      return action.payload;
    case CLEAR_ERROR:
      return '';
    default:
      return state;
  }
}
