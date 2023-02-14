const initialState = {
  place: {
    name: '',
    address: ''
  },
  options: {
    fields: ['formatted_address', 'geometry', 'name'],
    type: [],
    strictBounds: false
  }
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAP_TYPE': {
      return {
        ...state,
        options: {
          ...state.options,
          type: [action.payload]
        }
      };
    }
    case 'SET_PLACE': {
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

export default formReducer;
