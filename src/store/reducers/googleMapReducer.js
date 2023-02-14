const initialState = {
  isMapReady: false,
  apiKey: 'AIzaSyDlAgBiPpmD67UsYw8RrZwfehn1mWdpXO0',
  mapProps: {
    map: null,
    marker: null
  },
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
    case 'SET_MAP_PROPERTIES': {
      return {
        ...state,
        mapProps: {
          map: action.payload.map,
          marker: action.payload.marker
        }
      };
    }
    default:
      return state;
  }
};

export default googleMapReducers;
