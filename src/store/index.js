import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import feedEntries from './reducers/feedEntries'
import channels from './reducers/channels'

const reducer = combineReducers({ feedEntries, channels })

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
)

export default store

export * from './reducers/feedEntries'
export * from './reducers/channels'
