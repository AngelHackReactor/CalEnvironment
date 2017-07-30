import { SET_LOCATION } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return Object.assign({}, state, { location: action.payload });
    default:
      return state;
  }
};