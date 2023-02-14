/* autocomplete form action */

export const selectMapPlace = value => {
  return {
    type: 'SET_PLACE',
    payload: value
  };
};

export const setAutocompleteOption = value => {
  return {
    type: 'SET_AUTOCOMPLETE_OPTION',
    payload: value
  };
};

export const setInputKeyword = value => {
  return {
    type: 'SET_INPUT_KEYWORD',
    payload: value
  };
};
