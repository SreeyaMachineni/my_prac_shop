import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

import thunk from 'redux-thunk'

const middlewares = [logger,thunk]

const composedMiddleware = compose(applyMiddleware(...middlewares))
export const store = createStore(rootReducer,undefined,composedMiddleware)