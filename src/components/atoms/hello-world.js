import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

const HelloWorld = () => {
  const count = useSelector(state => state.counter.value);
  return <Text>a number</Text>;
};

export default HelloWorld;
