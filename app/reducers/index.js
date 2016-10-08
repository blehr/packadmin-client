import { combineReducers } from 'redux';
import DetailScoutReducer from './detail_scout_reducer';
import AllScoutReducer from './all_scout_reducer';
import SortReducer from './sort_reducer';
import EditScoutReducer from './edit_scout_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  sortedBy: SortReducer,
  allScouts: AllScoutReducer,
  scoutDetail: DetailScoutReducer,
  editScout: EditScoutReducer,
  form: formReducer
});

export default rootReducer;