import { filter, delay, mapTo } from 'rxjs/operators';

export const pingEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === 'PING'),
    delay(1000),
    mapTo({ type: 'PONG' })
  );
};

export const keywordEpic = action$ => {
  return action$.pipe(
    filter(action => action.type === 'SET_KEYWORD'),
    delay(1000),
    mapTo({ type: 'EMPTY_KEYWORD' })
  );
};
