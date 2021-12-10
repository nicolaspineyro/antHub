import {Colors} from 'components/ui';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  AntsStats: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    width: '40%',
    height: '10%',
    borderRadius: 10,
    shadowColor: Colors.gray,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  AntsStatsHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: '10%',
  },
  flatList: {
    marginBottom: '120%',
  },
});
