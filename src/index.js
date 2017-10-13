import React from 'react'
import ReactDOM from 'react-dom'

// Import style core
import './styles/main.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />, document.getElementById('root')
);

registerServiceWorker();
