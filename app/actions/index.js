import axios from 'axios';
import { browserHistory } from 'react-router';

// types
export const ADD_SCOUT_RESPONSE = 'ADD_SCOUT_RESPONSE';
export const GET_SCOUT_DETAIL = 'GET_SCOUT_DETAIL';
export const GET_ALL_SCOUTS = 'GET_ALL_SCOUTS';
export const SORT_BY = 'SORT_BY';
export const REMOVE_SCOUT = 'REMOVE_SCOUT';
export const UPDATE_SCOUT = 'UPDATE_SCOUT';
export const CLEAR_UPDATE_SCOUT = 'CLEAR_UPDATE_SCOUT';
export const SCOUT_TO_UPDATE = 'SCOUT_TO_UPDATE';
export const API_ERROR = 'API_ERROR';
export const CLEAR_SCOUT_DETAIL = 'CLEAR_SCOUT_DETAIL';
export const CLEAR_API_ERROR = 'CLEAR_API_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

// const ROOT_URL = 'http://express-project-brandonl.c9users.io:8080';
const ROOT_URL = 'http://localhost:8080';
const ALL_SCOUTS_URL = `${ROOT_URL}/scouts`;
const ADD_SCOUT_URL = `${ROOT_URL}/scouts/add`;
const SCOUT_DETAIL_URL = `${ROOT_URL}/scouts/detail`;


// set api errors on state
export const apiError = error => ({
  type: API_ERROR,
  payload: error,
});

// clear error state
export const clearApiError = () => ({
  type: CLEAR_API_ERROR,
});

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export const signinUser = ({ email, password }) => (
  (dispatch) => {
    const URL = `${ROOT_URL}/users/signin`;
    axios.post(URL, { email, password })
    .then((response) => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/scouts');
    })
    .catch(() => {
      dispatch(authError('Bad Login Info'));
    });
  }
);

export const signoutUser = () => {
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER,
  };
};

export const signupUser = data => (
  (dispatch) => {
    const URL = `${ROOT_URL}/users/signup`;
    axios.post(URL, { data })
     .then((response) => {
       dispatch({ type: AUTH_USER });
       localStorage.setItem('token', response.data.token);
       browserHistory.push('/scouts');
     })
    .catch((error) => {
      console.log(error.response.data.error);
      dispatch(authError(error.response.data.error));
    });
  }
);

// get all scouts
export const getAllScouts = () => (
  (dispatch) => {
    const token = localStorage.getItem('token');
    const URL = `${ALL_SCOUTS_URL}`;
    axios.get(URL, { headers: { authorization: token } })
      .then((response) => {
        dispatch({
          type: GET_ALL_SCOUTS,
          payload: response,
        });
        dispatch(clearApiError());
      })
      .catch((error) => {
        dispatch(apiError(error.response.data.errors));
      });
  }
);

// add scout
export const addScoutResponseAction = data => (
  (dispatch) => {
    const URL = `${ADD_SCOUT_URL}`;
    axios.post(URL, { data })
      .then((response) => {
        dispatch({
          type: ADD_SCOUT_RESPONSE,
          payload: response,
        });
        dispatch(clearApiError());
        browserHistory.push('/scouts/add-confirm');
      })
      .catch((error) => {
        dispatch(apiError(error.response.data.errors));
      });
  }
);

// get individual scout
export const getScoutDetail = id => (
  (dispatch) => {
    const URL = `${SCOUT_DETAIL_URL}/${id}`;
    axios.get(URL)
      .then((response) => {
        dispatch({
          type: GET_SCOUT_DETAIL,
          payload: response,
        });
        dispatch(clearApiError());
      })
      .catch((error) => {
        dispatch(apiError(error.response.data.errors));
      });
  }
);

// get individual scout to update
export const getScoutToUpdate = id => (
  (dispatch) => {
    const URL = `${SCOUT_DETAIL_URL}/${id}`;
    axios.get(URL)
      .then((response) => {
        response.data.birthday = new Date(response.data.birthday);
        dispatch({
          type: SCOUT_TO_UPDATE,
          payload: response,
        });
        dispatch(clearApiError());
      })
      .catch((error) => {
        dispatch(apiError(error.response.data.errors));
      });
  }
);

// update scout
export const updateScout = (data, id) => (
  (dispatch) => {
    const URL = `${SCOUT_DETAIL_URL}/${id}`;
    axios.put(URL, { data })
      .then((response) => {
        dispatch({
          type: UPDATE_SCOUT,
          payload: response,
        });
        dispatch(clearApiError());
        browserHistory.push('/scouts/update-confirm');
      })
      .catch((error) => {
        dispatch(apiError(error.response.data.errors));
      });
  }
);

// remove scout
export const removeScout = id => (
  (dispatch) => {
    const URL = `${SCOUT_DETAIL_URL}/${id}`;
    axios.delete(URL)
      .then((response) => {
        dispatch({
          type: REMOVE_SCOUT,
          payload: response,
        });
        dispatch(clearApiError());
        browserHistory.push('/scouts');
      })
      .catch((error) => {
        dispatch(apiError(error.response.data.errors));
      });
  }
);

// clear the update scout state
export const clearUpdateScout = () => (
  { type: CLEAR_UPDATE_SCOUT }
 );

export const clearScoutDetail = () => (
   { type: CLEAR_SCOUT_DETAIL }
  );

// sort by filter
export const sortBy = filter => ({
  type: SORT_BY,
  payload: filter,
});
