import React, {useEffect, useState} from 'react';
import AntsHub from 'components/home/AntsHub';
import {Button, Colors} from 'components/ui';
import {SafeAreaView, ActivityIndicator, Text} from 'react-native';
import {routeNames} from 'navigation/Routes';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useQuery} from 'react-query';
import {getAnts, LinearGradientProps} from 'utils/utils';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {Styles} from './HomeScreen.styles';

const HomeScreen = () => {
  const [content, setContent] = useState<Array>([]);
  const {data, isLoading, error} = useQuery('ants', getAnts);

  useEffect(() => {
    if (!!data && !error) {
      setContent(
        data?.ants.map((ant, index) => ({
          ...ant,
          id: index,
        })),
      );
    }
  }, [isLoading]);

  const navigation = useNavigation();

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Signed out!'));
      navigation.navigate(routeNames.Login);
    } catch (error) {
      console.log(error)
      alert('Signed out error, try again later.');
    }
  };

  if (isLoading) {
    return (
      <LinearGradient {...LinearGradientProps}>
        <SafeAreaView style={Styles.LoadingContainer}>
          <Text style={Styles.LoadingText}>Loading...</Text>
          <ActivityIndicator size="large" color="white" />
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient {...LinearGradientProps}>
      <SafeAreaView>
        <Button title="Log Out" onPress={signOut} color={Colors.red} />
        <AntsHub data={content} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

