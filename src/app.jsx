import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HomeContainer from './components/HomeContainer/HomeContainer.jsx';
import configureStore from './store/configure-store';
import './app.scss';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <HomeContainer />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
