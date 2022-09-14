import 'react-native-gesture-handler';
import React from 'react';
import Home from './scenes/home/index';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './redux/store';
import LoginPage from './scenes/login/LoginPage';
import SignUp from './scenes/signup/index';
import ColorPalette from './scenes/exercise/ColorPalette';
import ExerciseHome from './scenes/exercise/ExerciseHome';
// import Navigator from '_navigations';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Exercise">
          <Stack.Screen name="Login Page" component={LoginPage} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Exercise" component={ExerciseHome} />
          <Stack.Screen name="ColorPalette" component={ColorPalette} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
