import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/reducers/userSlice';
import TripDisplay from '../../components/molecules/TripDisplay';
import AddTrip from '../../components/molecules/AddTrip';

const Home = ({ navigation }) => {
  const user = useSelector(selectUser);
  console.log('here is the user from Login-->', user);
  return (
    <ScrollView style={styles.container}>
      <AddTrip />
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
