import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DetailScoutReducer from './detail_scout_reducer';
import AllScoutReducer from './all_scout_reducer';
import SortReducer from './sort_reducer';
import EditScoutReducer from './edit_scout_reducer';


const rootReducer = combineReducers({
  sortedBy: SortReducer,
  allScouts: AllScoutReducer,
  scoutDetail: DetailScoutReducer,
  editScout: EditScoutReducer,
  form: formReducer,
});

export default rootReducer;
