import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './reducers/Store'
import { Provider } from 'react-redux'

//It includes main.scss and ant design css files.
import './styles/main.scss'
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);