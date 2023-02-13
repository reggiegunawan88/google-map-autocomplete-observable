import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

export const setMapType = action$ => {
  return action$.pipe(ofType('SET_MAP_TYPE'));
};

export const setKeywordEpic = action$ => {
  return action$.pipe(ofType('SET_KEYWORD'), delay(1000), mapTo({ type: 'EMPTY_KEYWORD' }));
};
