import React, { useState, useCallback } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ColorSwitch = ({ colorName, setColors }) => {
  const [isSwitched, setIsSwitched] = useState(false);
  const handleAddition = () => {
    console.log('running');
    if (isSwitched) {
      setColors(stat => [colorName, ...stat]);
    }
  };
  const handleSubtraction = () => {
    console.log('running Subtraction');
    if (isSwitched === false) {
      setColors(stat => {
        const copy = stat.filter(color => color !== colorName);
        return copy;
      });

    }
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{colorName}</Text>
      <Switch
        onValueChange={() => {
          if (isSwitched) {
            setIsSwitched(false);
            handleSubtraction();
          } else {
            setIsSwitched(true);
            handleAddition();
          }
        }}
        value={isSwitched}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    // margin: 7,
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    // paddingLeft: 5,
    // paddingBottom: 9,
  },
});

export default ColorSwitch;
