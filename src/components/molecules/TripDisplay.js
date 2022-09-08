import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ActivityIndicator,
} from 'react-native';
import { useFetchUsersQuery } from '../../redux/api/apiSlice';

const TripDisplay = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useFetchUsersQuery('Test4');

  let content;

  if (isLoading) {
    content = <ActivityIndicator size="large" style={StyleSheet.loader} />;
  } else if (isSuccess) {
    console.log('here is the data-->', users);
    content = users.map((user, index) => {
      return (
        <View styles={styles.view} key={`unique ${index}`}>
          <Text style={styles.text}>Date: {user.date}</Text>
          <Text style={styles.text}>Time: {user.time}</Text>
          <Text style={styles.text}>Odometer: {user.odo}</Text>
          <Text style={styles.text}>Destination: {user.start}</Text>
          <Button value={user._id} title={'Delete'} />
        </View>
      );
    });
  } else if (isError) {
    console.log('an error', error);
    content = <Text>{error.toString()}</Text>;
  }
  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  view: {
    alignItems: 'center',
  },
  text: {
    paddingLeft: 10,
    color: 'black',
  },
});

export default TripDisplay;
