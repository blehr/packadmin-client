import { CREATE_PDF, CLEAR_PDF } from '../actions/index';

export default function (state = '', action) {
  switch (action.type) {
    case CREATE_PDF:
      return action.payload;
    case CLEAR_PDF:
      return '';
    default:
      return state;
  }
}
