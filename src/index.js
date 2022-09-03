import React from 'react';
import Home from '_scenes/home/index.js';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Login from './scenes/login';
// import Navigator from '_navigations';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      <Login />
    </Provider>
  );
};

export default App;
