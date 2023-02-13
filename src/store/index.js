import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { pingEpic, keywordEpic } from './epics/pingEpic';
import rootReducers from 'store/reducers';

// create epic observable middleware
const epicMiddleware = createEpicMiddleware();

// define epic root
export const rootEpic = combineEpics(pingEpic, keywordEpic);

const store = createStore(rootReducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export default store;
