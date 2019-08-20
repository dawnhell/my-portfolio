import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import config from '../config'
import reducers from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware(sagas)
const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  config.env === 'development'
    ? composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware))
    : applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export default store
