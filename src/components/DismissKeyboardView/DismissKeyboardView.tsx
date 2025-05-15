import React from 'react';
import { Keyboard, StyleSheet, TextInputProps, TouchableWithoutFeedback, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const DismissKeyboardView: React.FC<TextInputProps> = (props) => {
  const { children, style } = props;

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <View style={style}>{children}</View>
    </TouchableWithoutFeedback>
  );
};
