import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
