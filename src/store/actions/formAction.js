/* autocomplete form action */

export const selectMapPlace = value => {
  return {
    type: 'SET_PLACE',
    payload: value
  };
};

export const setMapOption = value => {
  return {
    type: 'SET_OPTION',
    payload: value
  };
};
