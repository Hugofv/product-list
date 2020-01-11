import React from 'react';
import history from '../../services/history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from './routes';
import store from './../../store';

const App = () => {

  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;
