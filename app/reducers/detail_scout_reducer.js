import { GET_SCOUT_DETAIL, REMOVE_SCOUT, ADD_SCOUT_RESPONSE } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
  case ADD_SCOUT_RESPONSE:
    return action.payload;
  case GET_SCOUT_DETAIL:
    return action.payload;
  case REMOVE_SCOUT:
    return action.payload;
  default:
    return state;
  }
}