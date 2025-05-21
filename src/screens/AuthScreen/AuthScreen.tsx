import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Button, DismissKeyboardView, TextField } from 'components';

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
  },
  button: {
    marginTop: 16
  }
});

export const AuthScreen: React.FC<NativeStackScreenProps<{ Registration: object }>> = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleChangePhone = (value: string) => setPhone(value);

  const handleChangePassword = (value: string) => setPassword(value);

  const handlePress = (event) => {
    console.log('213', event);
  };

  return (
    <DismissKeyboardView style={styles.container}>
      <TextField
        customStyles={styles.textField}
        label="Номер телефона"
        inputMode="tel"
        textContentType="telephoneNumber"
        onChangeText={handleChangePhone}
        value={phone}
      />
      <TextField
        customStyles={styles.textField}
        label="Пароль"
        inputMode="text"
        secureTextEntry
        textContentType="password"
        onChangeText={handleChangePassword}
        value={password}
      />
      <Button customStyles={styles.button} onPress={handlePress}>
        Войти
      </Button>
      <Link screen="Registration" params={{ id: 'registration' }}>
        Нет аккаунта? Зарегистрироваться
      </Link>
    </DismissKeyboardView>
  );
};
