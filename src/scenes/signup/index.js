import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useSignUpUserMutation } from '../../redux/api/apiSlice';
import { applyUser } from '../../redux/reducers/userSlice';

import Logo from '../../assets/images/ADD.png';
import CustomButton from '../../components/atoms/CustomButton';
import CustomInput from '../../components/atoms/CustomInput';

const SignUp = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //Needs to be changed for Create User

  const dispatch = useDispatch();

  const [signUp, { isLoading }] = useSignUpUserMutation();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={styles.text}>Sign Up</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text={'Sign Up'}
          onPress={async () => {
            try {
              const user = await signUp({
                username: username,
                password: password,
              }).unwrap();
              console.log('user in Sign Up Page-->', user);
              if (/* I NEED A BETTER CONDITION*/ user) {
                dispatch(applyUser(username));
                return navigation.navigate('Home');
              } else {
                console.log('NOT GOOD!!!');
              }
            } catch (error) {
              console.log('an error has occurred !!!!!', error);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'black',
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'red',
  },
  logo: {
    //   width: 700,
    //   height: 700
    width: '70%',
    height: '70%',
    maxWidth: 500,
    maxHeight: 500,
  },
});

export default SignUp;
