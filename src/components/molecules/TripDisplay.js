import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import {
  useFetchUsersQuery,
  useDeleteTripMutation,
} from '../../redux/api/apiSlice';
import { selectUser } from '../../redux/reducers/userSlice';
import CustomButton from '../atoms/CustomButton';

const TripDisplay = () => {
  const currentUser = useSelector(selectUser);
  // console.log('currentUser-->', currentUser.user);

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useFetchUsersQuery(currentUser);

  const [deleteTrip] = useDeleteTripMutation();
  console.log('deleteTrip-->', deleteTrip);

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
          <CustomButton
            text={'Delete'}
            onPress={async () => {
              /* SERIOUS BUG WHERE TRIPS ARE DELETED IS A USER SCROLLS */
              try {
                const trip = await deleteTrip({
                  username: currentUser,
                  tripId: user._id,
                }).unwrap();
                console.log('in Delete in Button-->', trip);
              } catch {
                console.log('an error has occured in Delete');
              }
            }}
          />
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
