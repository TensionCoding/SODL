import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import { COLOR_PALETTES } from './colors';
import ColorDisplay from './ColorDisplay';

const ExerciseHome = ({ navigation }) => {
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
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefresh(true);
    await handleFetchPalettes();
    setIsRefresh(false);
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
      // refreshControl={<RefreshControl refreshing={true} onRefresh={() => {}} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default ExerciseHome;
