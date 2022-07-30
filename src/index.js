import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import store from './redux/store'
// import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
); 