import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AllScoutReducer from './all_scout_reducer';
import SortReducer from './sort_reducer';
import ErrorReducer from './error_reducer';
import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';
import LoadingReducer from './loading_reducer';
import SingleScout from './single_scout_reducer';


const rootReducer = combineReducers({
  loading: LoadingReducer,
  user: UserReducer,
  sortedBy: SortReducer,
  allScouts: AllScoutReducer,
  scoutDetail: SingleScout,
  error: ErrorReducer,
  auth: AuthReducer,
  form: formReducer,
});

export default rootReducer;
