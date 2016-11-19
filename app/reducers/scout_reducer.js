import { getDen, standardDens } from '../utils/util';
import {
  CLEAR_SCOUT_DETAIL,
  SCOUT_DETAIL,
  GET_ALL_SCOUTS,
  CLEAR_ALL_SCOUTS,
  GET_SCOUT_FROM_ALL,
  DEN_ADV_DATA,
  SET_ADVANCEMENT,
} from '../actions/index';

export default function (state = { allScouts: [], scoutDetail: {}, advData: {}, advDen: 'Tiger' }, action) {
  switch (action.type) {
    case GET_ALL_SCOUTS:
      return { ...state, allScouts: action.payload };
    case CLEAR_ALL_SCOUTS:
      return { ...state, allScouts: [], advDen: 'Tiger', advData: {} };
    case CLEAR_SCOUT_DETAIL:
      return { ...state, scoutDetail: {}, advDen: 'Tiger', advData: {} };
    case SCOUT_DETAIL:
      action.payload.birthday = new Date(action.payload.birthday);

      const actionDenAdv = getDen(action.payload.den);
      const actionTitle = actionDenAdv.denString;
      if (action.payload[actionTitle]) {
        const dataKeys = Object.keys(action.payload[actionTitle]);
        dataKeys.map(key => {
          if (key !== '_id') {
            action.payload[actionTitle][key] = new Date(action.payload[actionTitle][key]);
          }
        });
      } else {
        action.payload[title] = {};
      }
      return { ...state, scoutDetail: action.payload, advDen: action.payload.den, advData: action.payload[actionTitle] };
    case GET_SCOUT_FROM_ALL:
      const newScout = state.allScouts.filter(scout => (
        scout._id === action.payload.id
      ));
      newScout[0].birthday = new Date(newScout[0].birthday);
      
      let rank = '';
      
      if (action.payload.customDens.length > 0) {
        rank = action.payload.customDens.forEach((den) => {
          if (den.name === newScout[0].den) return den.rank;
        });
      } else {
          rank = standardDens.forEach((den) => {
          if (den.name === newScout[0].den) return den.rank;
        });
      }
      
      if (newScout[0][rank]) {
        const newScoutKeys = Object.keys(newScout[0][rank]);
        newScoutKeys.map(key => {
          if (key !== '_id') {
            newScout[0][rank][key] = new Date(newScout[0][rank][key]);
          }
        });
      } else {
        newScout[0][rank] = {};
      }
      return { ...state, scoutDetail: newScout[0], advDen: newScout[0].den, advData: newScout[0][rank] };
    // case DEN_ADV_DATA:

    //   const den = getDen(action.payload);

    //   const denTitle = den.denString;

    //   if (state.allScouts[0][denTitle]) {
    //     const newKeys = Object.keys(state.allScouts[0][denTitle]);
    //     newKeys.map(key => {
    //       if (key !== '_id') {
    //         state.allScouts[0][denTitle][key] = new Date(state.allScouts[0][denTitle][key]);
    //       }
    //     });
    //   } else {
    //     state.allScouts[0][denTitle] = {};
    //   }

    //   return { ...state, advData: state.allScouts[0][denTitle]};
    case SET_ADVANCEMENT:
      return { ...state, advDen: action.payload };
    default:
      return state;
  }
}
