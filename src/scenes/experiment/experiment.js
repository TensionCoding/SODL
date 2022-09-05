import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useFetchUsersQuery } from '../../redux/api/apiSlice';

const Experiment = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useFetchUsersQuery();

  let content;

  if (isLoading) {
    content = <ActivityIndicator size="large" style={StyleSheet.loader} />;
  } else if (isSuccess) {
    // console.log('here is the data-->', users.data);
    content = users.data.map(user => {
      return (
        <View style={styles.container} key={user.id}>
          <View>
            <View style={styles.dataContainer}>
              <Text>
                {user.first_name} {user.last_name}
              </Text>
            </View>
            <View style={styles.dataContainer}>
              <Text>{user.email}</Text>
            </View>
          </View>
        </View>
      );
    });
  } else if (isError) {
    content = <Text>{error.toString()}</Text>;
  }
  return (
    <View>
      <Text>Look Below</Text>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  dataContainer: {
    flexDirection: 'row',
  },
});

export default Experiment;
