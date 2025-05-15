import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, DismissKeyboardView } from 'components';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },

  input: {
    borderColor: '#000',
    marginBottom: 15,
    width: '95%',
    borderWidth: 1
  },
  test: {
    // fontWeight: 'bold'
    // fontFamily: 'Montserrat-Bold'
  }
});

export const AuthScreen: React.FC = () => {
  const [text, setText] = React.useState('');

  const handleChangeText = (value: string) => {
    setText(value);
  };

  const handleEndEditing = () => {
    console.log('what is this?');
  };

  const handlePress = (event) => {
    console.log('213', event);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <DismissKeyboardView style={styles.container}>
          <Text style={styles.test}>Its Test</Text>
          <TextInput
            onEndEditing={handleEndEditing}
            inputMode="text"
            onChangeText={handleChangeText}
            style={styles.input}
            value={text}
          />
          <Button onPress={handlePress}>Привет</Button>
        </DismissKeyboardView>
      </View>
    </View>
  );
};
