import { View, Text } from 'react-native'
import React from 'react'
import Home from './Pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Navigator() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}