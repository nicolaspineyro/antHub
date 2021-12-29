import {StyleSheet} from 'react-native';
import {Colors} from 'components/ui';

export const Styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.white,
    marginHorizontal: '10%',
    marginVertical: '2.5%',
    paddingVertical: '2.5%',
    borderRadius: 10,
    shadowColor: Colors.gray,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  TextContainer: {
    margin: '5%',
  },
  CardText: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: '1%',
    textTransform: 'capitalize',
  },
});
