import {
  GET_LEADERS,
  UPDATE_LEADER,
  GET_LEADER,
  ADD_LEADER,
  REMOVE_LEADER,
  CLEAR_LEADERS,
} from '../actions';

export default function (state = { leaders: [] }, action) {
  switch (action.type) {
    case GET_LEADERS:
      return { ...state, leaders: action.payload };
    case UPDATE_LEADER:
      return { ...state, leaders: action.payload };
    case GET_LEADER:
    case ADD_LEADER:
    case REMOVE_LEADER:
      return { ...state, leaders: action.payload };
    case CLEAR_LEADERS:
      return { ...state, leaders: [] };
    default:
      return state;
  }
}
