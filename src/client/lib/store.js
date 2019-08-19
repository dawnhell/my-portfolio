import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import sagas from '../sagas'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'


const middlewares = [];
const sagaMiddleware = createSagaMiddleware(sagas);
middlewares.push(sagaMiddleware);

if (process.env.ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(sagas);

export default store
