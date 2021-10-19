import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Globalcss from './Globalcss'
import {HashRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Globalcss />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

