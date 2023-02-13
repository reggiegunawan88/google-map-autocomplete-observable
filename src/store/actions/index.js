export const ping = () => ({ type: 'PING' });

export const setKeyword = value => {
  return {
    type: 'SET_KEYWORD',
    payload: value
  };
};
