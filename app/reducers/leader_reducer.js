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
    case ADD_LEADER:
    case REMOVE_LEADER:
      if (action.payload.birthday) {
        action.payload.birthday = new Date(action.payload.birthday);
      }
      if (action.payload.youthProtection) {
        action.payload.youthProtection = new Date(action.payload.youthProtection);
      }
      return { ...state, leaders: [action.payload] };
    case GET_LEADER:
      const newLeader = state.leaders.filter(leader => (
        action.payload === leader._id
      ));
      if (newLeader[0].birthday) {
        newLeader[0].birthday = new Date(newLeader[0].birthday);
      }
      if (newLeader[0].youthProtection) {
        newLeader[0].youthProtection = new Date(newLeader[0].youthProtection);
      }
      return { ...state, leaders: newLeader };
    case CLEAR_LEADERS:
      return { ...state, leaders: [] };
    default:
      return state;
  }
}
