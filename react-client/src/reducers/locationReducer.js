import { HAS_GEO, SET_LOCATION, SET_COORDS } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case HAS_GEO:
      return Object.assign({}, state, { geoloc: true });
    case SET_LOCATION:
      return Object.assign({}, state, { location: action.payload });
    case SET_COORDS:
      return Object.assign({}, state, {
        lat: action.payload.lat,
        lon: action.payload.lon
      });
    default:
      return state;
  }
};