const initialState = {
  isMapReady: false,
  apiKey: 'AIzaSyDlAgBiPpmD67UsYw8RrZwfehn1mWdpXO0',
  center: {
    lat: 40.749933,
    lng: -73.98633
  },
  mapProps: {
    map: null,
    marker: null
  },
  autocomplete: null
};

const googleMapReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAP_READY':
      return {
        ...state,
        isMapReady: true
      };
    case 'STORE_MAP_PROPERTIES': {
      return {
        ...state,
        mapProps: {
          map: action.payload.map,
          marker: action.payload.marker
        }
      };
    }
    case 'STORE_AUTOCOMPLETE': {
      return {
        ...state,
        autocomplete: action.payload
      };
    }
    default:
      return state;
  }
};

export default googleMapReducers;
