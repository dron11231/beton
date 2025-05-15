import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { DismissKeyboardView } from 'components';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  input: {
    borderColor: '#000',
    marginBottom: 15,
    width: '95%',
    borderWidth: 1
  }
});

export const RegistrationScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  console.log('123');

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <View style={styles.container}>
      <DismissKeyboardView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeEmail}
          inputMode="email"
          value={email}
        />
      </DismissKeyboardView>
    </View>
  );
};
