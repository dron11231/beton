import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from 'react-native';
import { fontStyles } from 'styles';

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: 'rgb(255, 225, 0)',

    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    display: 'flex',
    fontSize: 54,
    alignItems: 'center'
  },
  buttonTextStyles: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    fontFamily: fontStyles.baseFontFamily,
    fontSize: fontStyles.fontSizeXXLarge,
    padding: 0
  }
});

interface IButtonProps extends PressableProps {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, customStyles } = props;

  const buttonStyles = StyleSheet.compose(styles.buttonStyles, customStyles);

  return (
    <Pressable {...props}>
      <View style={buttonStyles}>
        <Text style={styles.buttonTextStyles}>{children}</Text>
      </View>
    </Pressable>
  );
};
