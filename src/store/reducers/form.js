const initialState = {
  keyword: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_KEYWORD':
      return {
        ...state,
        keyword: action.payload
      };
    case 'EMPTY_KEYWORD': {
      return {
        ...state,
        keyword: 'keyword epic triggered'
      };
    }
    default:
      return state;
  }
};

export default formReducer;
