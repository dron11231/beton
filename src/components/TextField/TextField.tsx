import React from 'react';
import { StyleProp, StyleSheet, Text, TextInputProps, View, ViewStyle } from 'react-native';
import MaskInput, { Mask } from 'react-native-mask-input';
import { fontStyles, pallete } from 'styles';

interface ITextFieldProps extends TextInputProps {
  label?: string;
  customStyles?: StyleProp<ViewStyle>;
  mask?: Mask;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%'
  },

  label: {
    fontFamily: fontStyles.baseFontFamily,
    fontSize: fontStyles.fontSizeMedium,
    color: pallete.textSecondary
  },

  inputWrapper: {
    width: '100%'
  },

  input: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 4,
    fontSize: fontStyles.fontSizeXLarge
  }
});

export const TextField: React.FC<ITextFieldProps> = (props) => {
  const { label, customStyles } = props;

  const allStyles = StyleSheet.compose(styles.container, customStyles);

  return (
    <View style={allStyles}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <MaskInput style={styles.input} {...props} />
        {/* <TextInput style={styles.input} {...props} /> */}
      </View>
    </View>
  );
};
