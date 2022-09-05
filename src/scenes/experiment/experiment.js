import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
  ScrollView,
} from 'react-native';
import { useFetchUsersQuery } from '../../redux/api/apiSlice';
import TripDisplay from '../../components/molecules/TripDisplay';

const Experiment = () => {
  // const {
  //   data: users,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useFetchUsersQuery();

  // let content;

  // if (isLoading) {
  //   content = <ActivityIndicator size="large" style={StyleSheet.loader} />;
  // } else if (isSuccess) {
  //   console.log('here is the data-->', users);
  //   // content = users.data.map(user => {
  //   //   return (
  //   //     <View style={styles.container} key={user.id}>
  //   //       <View>
  //   //         <View style={styles.dataContainer}>
  //   //           <Text>
  //   //             {user.first_name} {user.last_name}
  //   //           </Text>
  //   //         </View>
  //   //         <View style={styles.dataContainer}>
  //   //           <Text>{user.email}</Text>
  //   //         </View>
  //   //       </View>
  //   //     </View>
  //   //   );
  //   // });
  //   // content = users.map((user, index) => {
  //   //   return (
  //   //     <View style={styles.container} key={`unique ${index}`}>
  //   //       <Text style={styles.text}>Date: {user.date}</Text>
  //   //       <Text style={styles.text}>Time: {user.time}</Text>
  //   //       <Text style={styles.text}>Odometer: {user.odo}</Text>
  //   //       <Text style={styles.text}>Destination: {user.start}</Text>
  //   //       <Button value={user._id} title={'Delete'} />
  //   //       <Text style={styles.text}>Time: {user.time}</Text>
  //   //     </View>
  //   //     // <View key={`unique ${index}`}>
  //   //     //   <Text>{user.date}</Text>
  //   //     // </View>
  //   //   );
  //   // });
  //   content = <TripDisplay />;
  // } else if (isError) {
  //   console.log('an error', error);
  //   content = <Text>{error.toString()}</Text>;
  // }
  return (
    <ScrollView style={styles.container}>
      <Text>Look Below</Text>
      <TripDisplay />
      <Text>Look Above</Text>
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
