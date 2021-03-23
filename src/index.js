import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/ReduxStore';
import './styles/index.scss';
import { Routing } from './Routing';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={Routing.homePageUrl}>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
