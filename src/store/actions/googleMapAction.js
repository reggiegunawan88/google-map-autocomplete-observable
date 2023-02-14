/* google map instance action */

export const setMapReady = () => {
  return {
    type: 'SET_MAP_READY'
  };
};

export const storeMapProperties = value => {
  return {
    type: 'STORE_MAP_PROPERTIES',
    payload: value
  };
};

export const storeAutocompleteInstance = value => {
  return {
    type: 'STORE_MAP_AUTOCOMPLETE',
    payload: value
  };
};

export const selectMapPlace = value => {
  return {
    type: 'SET_MAP_PLACE',
    payload: value
  };
};
