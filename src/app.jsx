import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './components/HomeContainer/HomeContainer.jsx';
import configureStore from './store/configure-store.js';
import './app.scss';

const store = configureStore();
console.log(store.getState());
const jsx = <HomeContainer />;

ReactDOM.render(jsx, document.getElementById('app'));
