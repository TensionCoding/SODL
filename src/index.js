import React from 'react';
import Home from '_scenes/home/index.js';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './redux/store';
import LoginPage from './scenes/login/LoginPage';
import Experiment from './scenes/experiment/experiment';
// import Navigator from '_navigations';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login Page">
          <Stack.Screen name="Login Page" component={LoginPage} />
          <Stack.Screen name="Experiment" component={Experiment} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
