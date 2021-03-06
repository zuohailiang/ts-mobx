import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css'
import './index.css';

import {HashRouter} from 'react-router-dom'
import { Provider } from 'mobx-react'
import rootStore from './store/index'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...new rootStore()}>
      <HashRouter>
        <App /> 
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
