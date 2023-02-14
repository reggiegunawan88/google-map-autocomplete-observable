/* autocomplete form action */

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
