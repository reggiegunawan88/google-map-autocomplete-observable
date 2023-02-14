/* google map instance reducer */
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
  autocomplete: null,
  place: {
    name: '',
    address: ''
  }
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
    case 'STORE_MAP_AUTOCOMPLETE': {
      return {
        ...state,
        autocomplete: action.payload
      };
    }
    case 'SET_MAP_PLACE': {
      return {
        ...state,
        place: {
          name: action.payload.name || '',
          address: action.payload.formatted_address || ''
        }
      };
    }
    default:
      return state;
  }
};

export default googleMapReducers;
