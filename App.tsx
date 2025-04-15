/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, TextInput, useColorScheme, View } from 'react-native';
import { Button } from './src/components';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  input: {
    borderColor: '#000',
    marginBottom: 15,
    width: '95%',
    borderWidth: 1
  }
});

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = React.useState('');

  const handleChangeText = (value: string) => {
    setText(value);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <TextInput
          dataDetectorTypes="address"
          inputMode="email"
          onChangeText={handleChangeText}
          style={styles.input}
          value={text}
        />
        <Button />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600'
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400'
//   },
//   highlight: {
//     fontWeight: '700'
//   }
// });

export default App;
