import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ExerciseHome = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseHome;
