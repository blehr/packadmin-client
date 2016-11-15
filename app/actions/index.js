import axios from 'axios';
import { browserHistory } from 'react-router';

// types
export const GET_ALL_SCOUTS = 'GET_ALL_SCOUTS';
export const SORT_BY = 'SORT_BY';
export const CLEAR_SCOUT_DETAIL = 'CLEAR_SCOUT_DETAIL';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ALL_SCOUTS = 'CLEAR_ALL_SCOUTS';
export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const IS_FETCHING = 'IS_FETCHING';
export const END_FETCHING = 'END_FETCHING';
export const SCOUT_DETAIL = 'SCOUT_DETAIL';
export const GET_SCOUT_FROM_ALL = 'GET_SCOUT_FROM_ALL';
export const SET_ADVANCEMENT = 'SET_ADVANCEMENT';
export const SAVE_ADVANCEMENT = 'SAVE_ADVANCEMENT';
export const GET_ADVANCEMENT_JSON = 'GET_ADVANCEMENT_JSON';
export const DEN_ADV_DATA = 'DEN_ADV_DATA';
export const GET_LEADERS = 'GET_LEADERS';
export const GET_LEADER = 'GET_LEADER';
export const ADD_LEADER = 'ADD_LEADER';
export const UPDATE_LEADER = 'UPDATE_LEADER';
export const REMOVE_LEADER = 'REMOVE_LEADER';
export const CLEAR_LEADERS = 'CLEAR_LEADERS';
export const CLEAR_LEADER_DETAIL = 'CLEAR_LEADER_DETAIL';
export const CREATE_PDF = 'CREATE_PDF';
export const CLEAR_PDF = 'CLEAR_PDF';
export const CHECK_TOKEN_RESPONSE = 'CHECK_TOKEN_RESPONSE';
export const NEW_PASSWORD_RESPONSE = 'NEW_PASSWORD_RESPONSE';
export const NO_EMAIL = 'NO_EMAIL';

// export const ROOT_URL = 'http://express-project-brandonl.c9users.io:8080';
export const ROOT_URL = 'http://localhost:8080';
// export const ROOT_URL = 'https://packadmin.com';
const ALL_SCOUTS_URL = `${ROOT_URL}/scouts`;
const ADD_SCOUT_URL = `${ROOT_URL}/scouts/add`;
const SCOUT_DETAIL_URL = `${ROOT_URL}/scouts/detail`;


// sort by filter
export const sortBy = filter => ({
  type: SORT_BY,
  payload: filter,
});

// set error
export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

// clear error state
export const clearError = () => ({
  type: CLEAR_ERROR,
});

// clear all scouts
export const clearAllScouts = () => ({
  type: CLEAR_ALL_SCOUTS,
});

// clear single scout
export const clearScoutDetail = () => ({
  type: CLEAR_SCOUT_DETAIL,
});

export const clearLeaders = () => ({
  type: CLEAR_LEADERS,
});

export const clearLeaderDetail = () => ({
  type: CLEAR_LEADER_DETAIL,
});

// show loader
export const isFetching = () => ({
  type: IS_FETCHING,
});

// hide loader
export const endFetching = () => ({
  type: END_FETCHING,
});

export const clearPdf = () => ({
  type: CLEAR_PDF,
});

export const getToken = () => (
  localStorage.getItem('token')
);


// map over errors object and pull off each meassage
const formatErrors = (error, dispatch) => {
  if (error.response.status && error.response.status === 401) {
    dispatch(setError('Are you logged in?'));
    return null;
  }
  if (error.response.data.message) {
    dispatch(setError(error.response.data.message));
  }
  if (error.response.data.errors !== '') {
    const keys = Object.keys(error.response.data.errors);
    let message = '';
    keys.map((property) => {
      message += error.response.data.errors[property].message;
      return message;
    });
    dispatch(setError(message));
    return null;
  }
  dispatch(setError(error.response.data.errors));
  return null;
};

// set advancement den
export const setAdvancement = den => (
  (dispatch) => {
    dispatch({
      type: SET_ADVANCEMENT,
      payload: den,
    });
    dispatch({
      type: DEN_ADV_DATA,
      payload: den,
    });
  }

);


export const denAdvData = data => {
  if (data === null || data === undefined) {
    data = {};
  } else {
    const keys = Object.keys(data);
    keys.map(key => {
      if (key !== '_id') {
        data[key] = new Date(data[key]);
      }
    });
  }

  return {
    type: DEN_ADV_DATA,
    payload: data,
  };
};

// get all scouts
export const getAllScouts = () => (
  (dispatch) => {
    const URL = `${ALL_SCOUTS_URL}`;
    dispatch(isFetching());
    axios.get(URL, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: GET_ALL_SCOUTS,
          payload: response.data.scouts,
        });
        dispatch(endFetching());
        // dispatch(clearError());
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

// get all leaders
export const getLeaders = () => (
  (dispatch) => {
    const URL = `${ROOT_URL}/leaders`;
    dispatch(isFetching());
    axios.get(URL, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: GET_LEADERS,
          payload: response.data.leaders,
        });
        dispatch(endFetching());
        // dispatch(clearError());
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

// add scout
export const addScout = data => (
  (dispatch) => {
    const URL = `${ADD_SCOUT_URL}`;
    dispatch(isFetching());
    axios.post(URL, { data }, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: SCOUT_DETAIL,
          payload: response.data.scout,
        });
        dispatch(clearError());
        dispatch(endFetching());
        browserHistory.push('/scouts/add-confirm');
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

// add leader
export const addLeader = data => (
  (dispatch) => {
    const URL = `${ROOT_URL}/leaders/add`;
    dispatch(isFetching());
    axios.post(URL, { data }, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: ADD_LEADER,
          payload: response.data.leader,
        });
        dispatch(clearError());
        dispatch(endFetching());
        browserHistory.push('/leaders/add-confirm');
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

// get individual scout
export const getScoutDetail = id => ({
  type: GET_SCOUT_FROM_ALL,
  payload: id,
});

// get individual leader
export const getLeader = id => ({
  type: GET_LEADER,
  payload: id,
});


// update scout
export const updateScout = (data, id) => (
  (dispatch) => {
    const URL = `${SCOUT_DETAIL_URL}/${id}`;
    dispatch(isFetching());
    axios.put(URL, { data }, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: SCOUT_DETAIL,
          payload: response.data,
        });
        dispatch(clearError());
        browserHistory.push('/scouts/update-confirm');
        dispatch(endFetching());
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

// update leader
export const updateLeader = (data, id) => (
  (dispatch) => {
    const URL = `${ROOT_URL}/leaders/detail/${id}`;
    dispatch(isFetching());
    axios.put(URL, { data }, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: UPDATE_LEADER,
          payload: response.data,
        });
        dispatch(clearError());
        browserHistory.push('/leaders/update-confirm');
        dispatch(endFetching());
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

// remove scout
export const removeScout = id => (
  (dispatch) => {
    const URL = `${SCOUT_DETAIL_URL}/${id}`;
    dispatch(isFetching());
    axios.delete(URL, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: SCOUT_DETAIL,
          payload: response.data,
        });
        dispatch(clearError());
        dispatch(endFetching());
        browserHistory.push('/scouts');
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

// remove leader
export const removeLeader = id => (
  (dispatch) => {
    const URL = `${ROOT_URL}/leaders/detail/${id}`;
    dispatch(isFetching());
    axios.delete(URL, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: REMOVE_LEADER,
          payload: response.data,
        });
        dispatch(clearError());
        dispatch(endFetching());
        browserHistory.push('/leaders');
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

export const createAPdf = data => (
  (dispatch) => {
    const URL = `${ROOT_URL}/pdf`;
    dispatch(isFetching());
    axios.post(URL, { data }, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: CREATE_PDF,
          payload: response.data,
        });
        dispatch(endFetching());
        dispatch(clearError());
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

export const getUser = () => (
  (dispatch) => {
    const URL = `${ROOT_URL}/users/profile`;
    dispatch(isFetching());
    axios.get(URL, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: GET_USER,
          payload: response.data,
        });
        dispatch(endFetching());
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

export const updateUser = data => (
  (dispatch) => {
    const URL = `${ROOT_URL}/users/profile`;
    dispatch(isFetching());
    axios.post(URL, data, { headers: { authorization: getToken() } })
      .then((response) => {
        dispatch({
          type: UPDATE_USER,
          payload: response.data,
        });
        dispatch(endFetching());
      })
      .catch((error) => {
        dispatch(endFetching());
        formatErrors(error, dispatch);
      });
  }
);

export const signinUser = ({ email, password }) => (
  (dispatch) => {
    const URL = `${ROOT_URL}/users/signin`;
    dispatch(isFetching());
    axios.post(URL, { email, password })
    .then((response) => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      dispatch(getAllScouts());
      dispatch(getLeaders());
      dispatch(getUser());
      browserHistory.push('/scouts');
    })
    .catch(() => {
      dispatch(endFetching());
      dispatch(setError('Email or Password is incorrect'));
    });
  }
);

export const signoutUser = () => (
  (dispatch) => {
    localStorage.removeItem('token');
    dispatch(clearAllScouts());
    dispatch(clearScoutDetail());
    dispatch(clearLeaders());
    dispatch(clearLeaderDetail());
    dispatch({ type: UNAUTH_USER });
    browserHistory.push('/');
  }
);

export const signupUser = data => (
  (dispatch) => {
    const URL = `${ROOT_URL}/users/signup`;
    dispatch(isFetching());
    axios.post(URL, { data })
     .then((response) => {
       dispatch({ type: AUTH_USER });
       localStorage.setItem('token', response.data.token);
       dispatch(getAllScouts());
       dispatch(getLeaders());
       dispatch(getUser());
       browserHistory.push('/scouts');
     })
    .catch((error) => {
      dispatch(endFetching());
      dispatch(setError(error.response.data.error));
    });
  }
);

export const requestPasswordReset = data => (
  (dispatch) => {
    const URL = `${ROOT_URL}/password`;
    axios.post(URL, { data })
      .then((response) => {
        if (response.data.success) {
          dispatch(clearError());
          browserHistory.push('/confirm-request');
        }
        if (!response.data.success) {
          dispatch({
            type: SET_ERROR,
            payload: 'No account with that email address exists.',
          });
        }
      })
      .error((error) => {
        console.log('error', error);
      });
  }
);

export const checkToken = token => (
  (dispatch) => {
    const URL = `${ROOT_URL}/password/reset/${token}`;
    axios.post(URL, { token })
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: CHECK_TOKEN_RESPONSE,
            payload: response.data,
          });
        }
        if (!response.data.success) {
          dispatch(setError('The pasword reset link has expired. Please try agin.'));
          browserHistory.push('/request');
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
);

export const submitResetPassword = ({ values, token }) => (
  (dispatch) => {
    const URL = `${ROOT_URL}/password/submit/${token}`;
    axios.post(URL, { values })
      .then((response) => {
        dispatch({
          type: NEW_PASSWORD_RESPONSE,
          payload: response.data.success,
        });
        if (response.data.success) {
          browserHistory.push('/signin');
        }
        if (!response.data.success) {
          dispatch(setError('Password reset was unsuccessful.'));
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
);
