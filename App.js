import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home iscreenn" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


