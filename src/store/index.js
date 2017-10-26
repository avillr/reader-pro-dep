import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import posts from './reducers/posts'
import channels from './reducers/channels'
import currentChannel from './reducers/currentChannel'

const reducer = combineReducers({ posts, channels, currentChannel })

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
)

export default store

export * from './reducers/posts'
export * from './reducers/channels'
export * from './reducers/currentChannel'
