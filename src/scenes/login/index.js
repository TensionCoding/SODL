// import React, { useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ActivityIndicator,
//   Image,
//   Button,
//   useWindowDimensions,
// } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import Logo from '../../assets/images/ADD.png';
// import { fetchUsers, selectAllUsers } from '../../redux/reducers/usersSlice';
// import { HelloWorld } from '../../components/atoms';
// import { useLoginUserMutation } from '../../redux/api/apiSlice';

// const Login = () => {
//   const { height } = useWindowDimensions();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const { loading } = useSelector(state => state.users);
//   const users = useSelector(selectAllUsers);
//   const count = useSelector(state => state.counter.value);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" style={StyleSheet.loader} />;
//   }
//   return (
//     <View>
//       <Button title={'Reload'} onPress={() => dispatch(fetchUsers())} />
//       {users.map(user => {
//         return (
//           <View style={styles.container} key={user.id}>
//             <View>
//               <View style={styles.dataContainer}>
//                 <Text>
//                   {user.first_name} {user.last_name}
//                 </Text>
//               </View>
//               <View style={styles.dataContainer}>
//                 <Text>{user.email}</Text>
//               </View>
//             </View>
//           </View>
//         );
//       })}
//       <View>
//         <HelloWorld />
//         <Text>{count}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   loader: {
//     marginTop: 'auto',
//     marginBottom: 'auto',
//   },
//   container: {
//     flexDirection: 'row',
//     marginVertical: 10,
//   },
//   dataContainer: {
//     flexDirection: 'row',
//   },
// });

// export default Login;
