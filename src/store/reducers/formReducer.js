/* autocomplete form reducer */
const initialState = {
  keyword: '',
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
    case 'SET_INPUT_KEYWORD': {
      return {
        ...state,
        keyword: action.payload
      };
    }
    case 'SET_MAP_TYPE': {
      return {
        ...state,
        options: {
          ...state.options,
          type: [action.payload]
        }
      };
    }
    default:
      return state;
  }
};

export default formReducer;
