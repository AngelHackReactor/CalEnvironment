import axios from 'axios';

export const SET_LOCATION = 'set_location';
export const GET_DATA = 'get_data';

export const setLocation = (address) => ({
  type: SET_LOCATION,
  payload: address
});

export const getData = () => ({
  type: GET_DATA,
  payload: 'hi'
});