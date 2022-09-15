import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from './ColorBox';

const ColorPalette = ({ route, navigation }) => {
  const paletteName = route.params.paletteName;
  const color = route.params.colors;
  return (
    <FlatList
      style={styles.container}
      data={color}
      keyExtractor={item => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ColorPalette;
