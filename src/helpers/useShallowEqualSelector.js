import { shallowEqual, useSelector } from 'react-redux';

const useShallowEqualSelector = selector => {
  return useSelector(selector, shallowEqual);
};

export default useShallowEqualSelector;
