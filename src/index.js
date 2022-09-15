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
import ColorPaletteModal from './scenes/exercise/ColorPaletteModal';
// import Navigator from '_navigations';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Exercise" component={ExerciseHome} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="ColorPaletteModal"
            component={ColorPaletteModal}
          />
        </RootStack.Navigator>
        {/* <RootStack.Navigator initialRouteName="Exercise">
          <RootStack.Screen name="Login Page" component={LoginPage} />
          <RootStack.Screen name="Sign Up" component={SignUp} />
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Exercise" component={ExerciseHome} />
          <RootStack.Screen
            name="ColorPalette"
            component={ColorPalette}
            options={({ route }) => ({ title: route.params.paletteName })}
          />
        </RootStack.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
