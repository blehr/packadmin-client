import { SET_ADVANCEMENT } from '../actions/index';

export default function (state = { advDen: 'tiger' }, action) {
  switch (action.type) {
    case SET_ADVANCEMENT:
      return { ...state, advDen: action.payload };
    default:
      return state;
  }
}
