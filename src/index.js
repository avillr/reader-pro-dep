import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

// Stylesheets
import './index.css'

// Grab all components dynamically
import { components, history, store } from './components/components.js'

// Register Service Worker
import registerServiceWorker from './utils/registerServiceWorker'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <components.App />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
