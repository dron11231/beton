import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, RegistrationScreen } from 'screens';

const Stack = createNativeStackNavigator();

export const Main: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Auth" component={AuthScreen} options={{ title: 'Авторизация' }} />
    <Stack.Screen
      name="Registration"
      component={RegistrationScreen}
      options={{ title: 'Регистрация' }}
    />
  </Stack.Navigator>
);
