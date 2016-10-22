import { compose, createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { AUTH_USER, getUser, getAllScouts } from './actions';


const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  }
}





import reducers from './reducers/index';

const storeConfig = () => {
  const applyMiddlewares = applyMiddleware(
  reduxPromise,
    reduxThunk
  );
  
  const createStoreWithMiddleware = compose(
    applyMiddlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  
  const store = createStoreWithMiddleware(createStore)(
      reducers,
  );
  
  store.dispatch = addLoggingToDispatch(store);
  
  const token = localStorage.getItem('token');
  
  if (token) {
    store.dispatch({ type: AUTH_USER });
    store.dispatch(getUser());
    store.dispatch(getAllScouts());
  }
  
  return store;
}

export default storeConfig;

