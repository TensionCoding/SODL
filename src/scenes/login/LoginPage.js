import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../redux/api/apiSlice';
import { applyUser } from '../../redux/reducers/userSlice';

import Logo from '../../assets/images/ADD.png';
import CustomButton from '../../components/atoms/CustomButton';
import CustomInput from '../../components/atoms/CustomInput';

const LoginPage = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginUserMutation();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
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
          text={'Login'}
          onPress={async () => {
            try {
              const user = await login({
                username: username,
                password: password,
              }).unwrap();
              if (user === 'true') {
                dispatch(applyUser(username));
                return navigation.navigate('Home');
              } else {
                console.log('did not return true-->', user);
                return navigation.navigate('Sign Up');
              }
            } catch {
              console.log('an error has occurred !!!!!');
            }
          }}
        />
        {/* <GooglePlacesInput/> */}
        {/* <Button title='Go To Details'
          onPress={()=> navigation.navigate('Home')} /> */}
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
  logo: {
    //   width: 700,
    //   height: 700
    width: '70%',
    height: '70%',
    maxWidth: 500,
    maxHeight: 500,
  },
});

export default LoginPage;
