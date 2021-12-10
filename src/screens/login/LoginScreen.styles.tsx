import {Colors} from 'components/ui';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Card: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: 'gray',
    width: '80%',
    height: '40%',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 60,
  },
  Button: {
    marginBottom: 60,
  },
});
