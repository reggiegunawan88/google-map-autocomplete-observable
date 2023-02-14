/* google map instance action */

export const setMapProperties = value => {
  return {
    type: 'SET_MAP_PROPERTIES',
    payload: value
  };
};

export const setMapReady = () => {
  return {
    type: 'SET_MAP_READY'
  };
};
