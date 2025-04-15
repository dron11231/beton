import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: 'rgb(255, 225, 0)',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    display: 'flex',
    fontSize: 54,
    alignItems: 'center'
  },
  buttonTextStyles: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    fontSize: 54,
    padding: 0
  }
});

export const Button: React.FC = () => (
  <Pressable>
    <View /* style={styles.buttonStyles} */>
      <Text style={styles.buttonStyles}>Hello</Text>
    </View>
  </Pressable>
);
