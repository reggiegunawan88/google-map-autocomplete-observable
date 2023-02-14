import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

// define root reducer and epic
import rootEpic from './epics';
import rootReducers from 'store/reducers';

// define observable epics middleware
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export default store;
