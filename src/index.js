import React from 'react';
import {View, Text} from 'react-native';
import {HelloWorld} from '_atoms';

const App = () => {
  return (
    <View>
      {/* <Text>'Hello World'</Text> */}
      <HelloWorld name={'yo'}></HelloWorld>
    </View>
  );
};

export default App;
