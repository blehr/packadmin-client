import axios from 'axios';

export const ADD_SCOUT_RESPONSE = 'ADD_SCOUT_RESPONSE';
export const GET_SCOUT_DETAIL = 'GET_SCOUT_DETAIL';
export const GET_ALL_SCOUTS = 'GET_ALL_SCOUTS';
export const SORT_BY = 'SORT_BY';
export const REMOVE_SCOUT = 'REMOVE_SCOUT';
export const UPDATE_SCOUT = 'UPDATE_SCOUT';
export const CLEAR_UPDATE_SCOUT = 'CLEAR_UPDATE_SCOUT';
export const SCOUT_TO_UPDATE = 'SCOUT_TO_UPDATE';

const baseURL = 'http://express-project-brandonl.c9users.io:8080';

export const addScoutResponseAction = (data) => {
  const postURL = `${baseURL}/scouts/add`;
  const request = axios.post(postURL, { data });

  return {
    type: ADD_SCOUT_RESPONSE,
    payload: request,
  };
};

export const getScoutToUpdate = (id) => {
  const getURL = `${baseURL}/scouts/detail/${id}`;
  const request = axios.get(getURL);

  return {
    type: SCOUT_TO_UPDATE,
    payload: request,
  };
};

export const updateScout = (data, id) => {
  const postURL = `${baseURL}/scouts/update/${id}`;
  const request = axios.post(postURL, { data });

  return {
    type: UPDATE_SCOUT,
    payload: request,
  };
};

export const clearUpdateScout = () => (
  { type: CLEAR_UPDATE_SCOUT }
 );

export const getScoutDetail = (id) => {
  const getURL = `${baseURL}/scouts/detail/${id}`;
  const request = axios.get(getURL);
  return {
    type: GET_SCOUT_DETAIL,
    payload: request,
  };
};

export const getAllScouts = () => {
  const getURL = `${baseURL}/scouts`;
  const request = axios.get(getURL);

  return {
    type: GET_ALL_SCOUTS,
    payload: request,
  };
};

export const removeScout = (id) => {
  const getURL = `${baseURL}/scouts/remove/${id}`;
  const request = axios.post(getURL);
  return {
    type: REMOVE_SCOUT,
    payload: request,
  };
};

export const sortBy = filter => (
  {
    type: SORT_BY,
    payload: filter,
  }
);

