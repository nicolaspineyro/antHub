import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {routeNames} from 'navigation/Routes';

import {Styles} from './LoginScreen.styles';
import {LinearGradientProps} from 'utils/utils';
import LinearGradient from 'react-native-linear-gradient';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    GoogleSignin.configure();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (loggedIn && !!userInfo) {
      navigation.navigate(routeNames.Home);
    }
  }, [loggedIn, userInfo]);

  const onAuthStateChanged = user => {
    setUserInfo(user);
    if (user) {
      setLoggedIn(true);
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);
      setLoggedIn(true);
      await auth().signInWithCredential(credential);
    } catch (error) {
      alert('Sign in has fail');
    }
  };

  return (
    <LinearGradient {...LinearGradientProps} style={Styles.Container}>
      <View style={Styles.Card}>
        <Text style={Styles.Title}>antHub</Text>
        <GoogleSigninButton style={Styles.Button} onPress={signIn} />
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
