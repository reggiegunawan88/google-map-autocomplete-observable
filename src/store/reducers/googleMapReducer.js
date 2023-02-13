const initialState = {
  isMapReady: false,
  apiKey: 'AIzaSyDZfVO29Iytspv4xz7S68doIoiztiRLhbk',
  center: {
    lat: 40.749933,
    lng: -73.98633
  }
};

const googleMapReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAP_READY':
      return {
        ...state,
        isMapReady: true
      };
    case 'UPDATE_MAP_LOCATION':
      return {
        ...state,
        center: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      };
    default:
      return state;
  }
};

export default googleMapReducers;
