// import React from 'react';
// import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

// const LoginScreen = ({navigation}) => (
//   <SafeAreaView>
//     <Text>Screen: Login</Text>

//     <TouchableHighlight onPress={() => navigation.navigate('Home')}>
//       <Text>Go to home</Text>
//     </TouchableHighlight>
//   </SafeAreaView>
// );

// export default LoginScreen;

import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../../redux/reducers/usersSlice';

const Login = () => {
  const dispatch = useDispatch();
  const {users, loading} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={StyleSheet.loader} />;
  }
  return (
    <View>
      <Button title={'Reload'} onPress={() => dispatch(fetchUsers())} />
      {users.map(user => {
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
      })}
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

export default Login;
