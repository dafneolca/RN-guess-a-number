import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';


const NumberDisplay = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.accent,
    fontSize: 22
  }
});

export default NumberDisplay;