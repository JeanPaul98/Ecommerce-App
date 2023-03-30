import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/screen/Home';
import MyCart from './components/screen/MyCart';
import Productinfo from './components/screen/Productinfo';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={
                {
                  headerShown: false,
                }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="MyCart" component={MyCart} />
              <Stack.Screen name="Productinfo" component={Productinfo} />
            </Stack.Navigator> 
        </NavigationContainer>
  );
}
