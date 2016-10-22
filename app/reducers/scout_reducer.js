import {
  CLEAR_SCOUT_DETAIL,
  SCOUT_DETAIL,
  GET_ALL_SCOUTS,
  CLEAR_ALL_SCOUTS,
  GET_SCOUT_FROM_ALL,
} from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_SCOUTS:
      return { ...state, allScouts: action.payload };
    case CLEAR_ALL_SCOUTS:
      return { ...state, allScouts: [] };
    case SCOUT_DETAIL:
      return { ...state, singleScout: action.payload };
    case GET_SCOUT_FROM_ALL:
      const newScout = state.allScouts.filter(scout => {
        return scout._id === action.payload;
      });
      return { ...state, singleScout: newScout[0] };
    case CLEAR_SCOUT_DETAIL:
      return { ...state, singleScout: {} };
    default:
      return state;
  }
}
