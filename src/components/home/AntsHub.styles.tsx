import {Colors} from 'components/ui';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  AntsStats: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    width: '40%',
    borderRadius: 10,
    shadowColor: Colors.gray,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    marginBottom: '2.5%',
  },
  AntsStatsHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  flatList: {
    height: '80%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-around',
  },
  Container: {
    paddingBottom: '15%',
  }
});
