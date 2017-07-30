import axios from 'axios';

export const SET_LOCATION = 'set_location';
export const GET_DATA = 'get_data';

export const setLocation = (address) => {
  return {
    type: SET_LOCATION,
    payload: new Promise((resolve, reject) => {
      axios.get('/getCensusTract',{
        params: {
          addressInput: address
        }
      }).then(result => {
        axios.get('/getTractData',{
          params: {
            censusTract: result.data
          }
        }).then( result => {
          console.log('RESULT AFTER DB',result.data)
          resolve(result.data);
        })    
      })
    })
  }
};

export const getData = (address) => {
  return {
    type: GET_DATA,
    payload: new Promise((resolve, reject) => {
      axios.get('/getStateData', {
        params: {
          addressInput: address
        }
      }).then(result => {
        // console.log('hit');
        resolve(result);
      })
    })
  }

};