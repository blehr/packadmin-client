import {
  CLEAR_SCOUT_DETAIL,
  SCOUT_DETAIL,
} from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case SCOUT_DETAIL:
      return { ...state, scout: action.payload };
    case CLEAR_SCOUT_DETAIL:
      return { ...state, scout: {} };
    default:
      return state;
  }
}
