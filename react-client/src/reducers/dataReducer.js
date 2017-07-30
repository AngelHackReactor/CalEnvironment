import { GET_DATA } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DATA:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
};
