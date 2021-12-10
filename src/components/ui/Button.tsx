import React from 'react';
import {ButtonProps, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from 'components/ui';

const Button = ({title, onPress, color}: ButtonProps) => {
  const Styles = StyleSheet.create({
    ButtonContainer: {
      alignItems: 'center',
      backgroundColor: !!color ? color : Colors.gray,
      width: '50%',
      alignSelf: 'center',
      borderRadius: 10,
      margin: '5%',
    },
    ButtonText: {
      color: 'white',
      margin: '5%',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
  return (
    <TouchableOpacity style={Styles.ButtonContainer} onPress={onPress}>
      <Text style={Styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
