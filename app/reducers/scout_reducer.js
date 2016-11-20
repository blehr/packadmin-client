import { getDen, standardDens, Rank } from '../utils/util';
import {
  CLEAR_SCOUT_DETAIL,
  SCOUT_DETAIL,
  GET_ALL_SCOUTS,
  CLEAR_ALL_SCOUTS,
  GET_SCOUT_FROM_ALL,
  DEN_ADV_DATA,
  GET_USER,
  SET_ADVANCEMENT,
} from '../actions/index';

export default function (state = { allScouts: [], scoutDetail: {}, advData: {}, advDen: 'Tiger', customDens: [] }, action) {
  switch (action.type) {
    case GET_ALL_SCOUTS:
      return { ...state, allScouts: action.payload };
    case CLEAR_ALL_SCOUTS:
      return { ...state, allScouts: [], advDen: 'Tiger', advData: {} };
    case CLEAR_SCOUT_DETAIL:
      return { ...state, scoutDetail: {}, advDen: 'Tiger', advData: {} };
    case GET_USER:
      return { ...state, customDens: action.payload.customDens };
    // case SCOUT_DETAIL:
    //   action.payload.birthday = new Date(action.payload.birthday);
    //
    //   const actionDenAdv = getDen(action.payload.den);
    //   const actionTitle = actionDenAdv.denString;
    //   if (action.payload[actionTitle]) {
    //     const dataKeys = Object.keys(action.payload[actionTitle]);
    //     dataKeys.map(key => {
    //       if (key !== '_id') {
    //         action.payload[actionTitle][key] = new Date(action.payload[actionTitle][key]);
    //       }
    //     });
    //   } else {
    //     action.payload[title] = {};
    //   }
    //   return { ...state, scoutDetail: action.payload, advDen: action.payload.den, advData: action.payload[actionTitle] };
    case GET_SCOUT_FROM_ALL:
      const newScout = state.allScouts.filter(scout => (
        scout._id === action.payload
      ));
      newScout[0].birthday = new Date(newScout[0].birthday);

      let rank = '';

      if (state.customDens.length > 0) {
        state.customDens.forEach((den) => {
          if (den.name === newScout[0].den) {
            rank = den.rank;
          } else {
            standardDens.forEach((denItem) => {
              if (denItem.name === newScout[0].den) rank = denItem.rank;
            });
          }
        });
      } else {
        standardDens.forEach((den) => {
          if (den.name === newScout[0].den) rank = den.rank;
        });
      }
      const rankLowerCase = rank.toLowerCase();

      if (newScout[0][rankLowerCase]) {
        const newScoutKeys = Object.keys(newScout[0][rankLowerCase]);
        newScoutKeys.map(key => {
          if (key !== '_id') {
            newScout[0][rankLowerCase][key] = new Date(newScout[0][rankLowerCase][key]);
          }
        });
      } else {
        newScout[0][rankLowerCase] = {};
      }
      return {
        ...state,
        scoutDetail: newScout[0],
        advDen: rank,
        advData: newScout[0][rankLowerCase],
      };
    case DEN_ADV_DATA:
      const denTitle = action.payload.toLowerCase();
      if (state.scoutDetail[denTitle]) {
        const newKeys = Object.keys(state.scoutDetail[denTitle]);
        newKeys.map(key => {
          if (key !== '_id') {
            state.scoutDetail[denTitle][key] = new Date(state.scoutDetail[denTitle][key]);
          }
        });
      } else {
        state.scoutDetail[denTitle] = {};
      }
      return { ...state, advData: state.scoutDetail[denTitle] };
    case SET_ADVANCEMENT:
      return { ...state, advDen: action.payload };
    default:
      return state;
  }
}
