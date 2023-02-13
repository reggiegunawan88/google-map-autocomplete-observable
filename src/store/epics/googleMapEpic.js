import { ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

export const setMapReady = action$ => {
  return action$.pipe(ofType('SET_MAP_READY'));
};

export const searchLocationEpic = action$ => {
  return action$.pipe(ofType);
};
