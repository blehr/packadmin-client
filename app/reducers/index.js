import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DetailScoutReducer from './detail_scout_reducer';
import AllScoutReducer from './all_scout_reducer';
import SortReducer from './sort_reducer';
import EditScoutReducer from './edit_scout_reducer';
import ErrorReducer from './error_reducer';
import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';


const rootReducer = combineReducers({
  user: UserReducer,
  sortedBy: SortReducer,
  allScouts: AllScoutReducer,
  scoutDetail: DetailScoutReducer,
  editScout: EditScoutReducer,
  error: ErrorReducer,
  auth: AuthReducer,
  form: formReducer,
});

export default rootReducer;
