import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Button, DismissKeyboardView, TextField } from 'components';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    paddingTop: 100,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  },
  textField: {
    width: '70%',
    alignItems: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }
});

export const AuthScreen: React.FC<NativeStackScreenProps<{ Registration: object }>> = () => {
  const [phone, setPhone] = useState('');

  const handleChangePhone = (value: string) => setPhone(value);

  const handlePress = (event) => {
    console.log('213', event);
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
      <View style={styles.buttonsContainer}>
        <Button onPress={handlePress}>Получить код</Button>
        <Link screen="Registration" params={{ id: 'registration' }}>
          Нет аккаунта? Зарегистрироваться
        </Link>
      </View>
    </DismissKeyboardView>
  );
};
