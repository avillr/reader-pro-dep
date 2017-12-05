import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter } from 'react-router-dom'

// Stylesheets
import './index.css'

// Grab all components dynamically
import { components, history, store } from './components/components.js'
import registerServiceWorker from './utils/registerServiceWorker'

// Initialize Firebase Application
import firebase from 'firebase'
import { firebaseConfig } from './utils/secrets.js'
firebase.initializeApp(firebaseConfig)

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
