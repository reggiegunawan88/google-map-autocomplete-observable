import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import rootReducers from 'store/reducers';

// create epic observable middleware
const epicMiddleware = createEpicMiddleware();

// define epic root
// export const rootEpic = combineEpics(setKeywordEpic);

const store = createStore(rootReducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export default store;
