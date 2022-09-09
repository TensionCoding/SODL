import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/reducers/userSlice';
import TripDisplay from '../../components/molecules/TripDisplay';

const Home = ({ navigation }) => {
  const user = useSelector(selectUser);
  console.log('here is the user from Login-->', user);
  return (
    <ScrollView style={styles.container}>
      <TripDisplay />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    display: 'flex',
    flex: 1,
    marginVertical: 10,
  },
  dataContainer: {
    flexDirection: 'row',
  },
});

export default Home;
