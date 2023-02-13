const initialState = {
  keyword: '',
  type: ['establishment'],
  biasViewport: true,
  strictBounds: false
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
    // case 'SET_MAP_TYPE': {
    //   return {

    //   }
    // }
    default:
      return state;
  }
};

export default formReducer;
