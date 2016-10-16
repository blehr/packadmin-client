import {
  UPDATE_SCOUT,
  CLEAR_UPDATE_SCOUT,
  SCOUT_TO_UPDATE,
}
from '../actions';


export default function (state = {}, action) {
  switch (action.type) {
    case SCOUT_TO_UPDATE:
      return { ...state, scoutToUpdate: action.payload.data };
    case UPDATE_SCOUT:
      return { ...state, scoutToUpdate: action.payload.data };
    case CLEAR_UPDATE_SCOUT:
      return {};
    default:
      return state;
  }
}
