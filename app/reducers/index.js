import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SortReducer from './sort_reducer';
import ErrorReducer from './error_reducer';
import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';
import LoadingReducer from './loading_reducer';
import ScoutReducer from './scout_reducer';
import AdvancementReducer from './advancement_reducer';


const rootReducer = combineReducers({
  adv: AdvancementReducer,
  loading: LoadingReducer,
  user: UserReducer,
  sortedBy: SortReducer,
  scouts: ScoutReducer,
  error: ErrorReducer,
  auth: AuthReducer,
  form: formReducer,
});

export default rootReducer;
