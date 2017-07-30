import axios from 'axios';

export const SET_LOCATION = 'set_location';
export const GET_DATA = 'get_data';

export const setLocation = (address) => {
  var request = axios.get('/getCensusTract',{
    params: {
      addressInput: address
    }
  });

  return {
    type: SET_LOCATION,
    payload: address
  }
};

export const getData = (address) => {
  var request = axios.get('/getStateData',{
    params: {
      addressInput: address
    }
  });  
  console.log('requestGET TRACT', request)
  return {
    type: GET_DATA,
    payload: 'hi GET DATA'
  }

};