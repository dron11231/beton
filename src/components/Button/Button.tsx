import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';

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
    // fontFamily: 'Montserrat-Black',
    fontSize: 54,
    padding: 0
  }
});

interface IButtonProps extends PressableProps {
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children } = props;

  return (
    <Pressable {...props}>
      <View>
        <Text style={styles.buttonStyles}>{children}</Text>
      </View>
    </Pressable>
  );
};
