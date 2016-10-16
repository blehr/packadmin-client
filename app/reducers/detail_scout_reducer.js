import {
  GET_SCOUT_DETAIL,
  REMOVE_SCOUT,
  ADD_SCOUT_RESPONSE,
  CLEAR_SCOUT_DETAIL,
} from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_SCOUT_RESPONSE:
      return { ...state, scoutDetail: action.payload.data };
    case GET_SCOUT_DETAIL:
      return { ...state, scoutDetail: action.payload.data };
    case REMOVE_SCOUT:
      return { ...state, scoutDetail: action.payload.data };
    case CLEAR_SCOUT_DETAIL:
      return {};
    default:
      return state;
  }
}
