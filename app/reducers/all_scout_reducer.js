import { GET_ALL_SCOUTS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
  case GET_ALL_SCOUTS:
    return action.payload;
  default:
    return state;
  }
}