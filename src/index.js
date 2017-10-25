import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './styles/index.css'
import store from './store'
import App from './containers/App'
import registerServiceWorker from './utils/registerServiceWorker'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
