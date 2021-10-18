/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App title="Application"/>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
