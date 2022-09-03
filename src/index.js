import React from 'react';
import Home from '_scenes/home/index.js';
import {Provider} from 'react-redux';
import {store} from './redux/store';
// import Navigator from '_navigations';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
