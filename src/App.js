import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header/index';
import GlobalStyled from './styles/global';
import Routes from './routes';

import store from './store/index'

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <GlobalStyled />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
