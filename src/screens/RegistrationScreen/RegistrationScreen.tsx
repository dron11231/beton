import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { DismissKeyboardView, TextField } from 'components';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    paddingTop: 100,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  },

  textField: {
    width: '70%',
    alignItems: 'center'
  }
});

export const RegistrationScreen: React.FC = () => {
  const [phone, setPhone] = useState('');

  const handleChangePhone = (value: string) => {
    setPhone(value);
  };

  return (
    <DismissKeyboardView style={styles.container}>
      <TextField
        mask={[
          '+',
          '7',
          ' ',
          '(',
          /\d/,
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/
        ]}
        customStyles={styles.textField}
        onChangeText={handleChangePhone}
        inputMode="tel"
        placeholder="+7 (999) 999-99-99"
        label="Номер телефона"
        value={phone}
      />
    </DismissKeyboardView>
  );
};
