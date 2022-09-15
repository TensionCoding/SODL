import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ColorDisplay from './ColorDisplay';

const ExerciseHome = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colorPalettes, setColors] = useState([]);
  const [isRefreshing, setIsRefresh] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColors(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColors(palette => [newColorPalette, ...palette]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefresh(true);
    await handleFetchPalettes();
    setIsRefresh(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <ColorDisplay
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}>
          <Text style={styles.text}>Add a color scheme</Text>
        </TouchableOpacity>
      }
      // refreshControl={<RefreshControl refreshing={true} onRefresh={() => {}} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    color: 'teal',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ExerciseHome;
