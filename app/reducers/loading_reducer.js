import {
  IS_FETCHING,
  END_FETCHING,
} from '../actions/index';

export default function (state = false, action) {
  switch (action.type) {
    case IS_FETCHING:
      return true;
    case END_FETCHING:
      return false;
    default:
      return state;
  }
}
