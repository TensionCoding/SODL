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
import { useFetchUsersQuery } from '../../redux/api/apiSlice';
import { selectUser } from '../../redux/reducers/userSlice';
import TripDisplay from '../../components/molecules/TripDisplay';

const Experiment = () => {
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

// const styles = StyleSheet.create({
//   loader: {
//     marginTop: 'auto',
//     marginBottom: 'auto',
//   },
//   container: {
//     flex: 1,
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   view: {
//     alignItems: 'center',
//   },
//   dataContainer: {
//     flexDirection: 'row',
//   },
//   text: {
//     paddingLeft: 10,
//     color: 'white',
//   },
// });

export default Experiment;
