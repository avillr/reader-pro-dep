import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import feedEntries from './reducers/feedEntries'

const reducer = combineReducers({ feedEntries })

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
)

export default store

export * from './reducers/feedEntries'
