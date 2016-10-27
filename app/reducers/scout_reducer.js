import moment from 'moment';
import {
  CLEAR_SCOUT_DETAIL,
  SCOUT_DETAIL,
  GET_ALL_SCOUTS,
  CLEAR_ALL_SCOUTS,
  GET_SCOUT_FROM_ALL,
  DEN_ADV_DATA,
} from '../actions/index';

export default function (state = { allScouts: [], advData: {} }, action) {
  switch (action.type) {
    case GET_ALL_SCOUTS:
      return { ...state, allScouts: action.payload };
    case CLEAR_ALL_SCOUTS:
      return { ...state, allScouts: [] };
    case SCOUT_DETAIL:
      return { ...state, allScouts: [action.payload] };
    case GET_SCOUT_FROM_ALL:
      const newScout = state.allScouts.filter(scout => (
        scout._id === action.payload
      ));
      newScout[0].birthday = new Date(newScout[0].birthday);
      return { ...state, allScouts: newScout };
    case DEN_ADV_DATA:
      const keys = Object.keys(action.payload);
      keys.map(key => {
        if (key !== '_id') {
          action.payload[key] = new Date(action.payload[key]);
        }
      });
      return { ...state, advData: action.payload };
    case CLEAR_SCOUT_DETAIL:
      return { ...state, allScouts: [] };
    default:
      return state;
  }
}
