import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientHomeScreen from '../screens/Client/HomeScreen';
import OrdersScreen from '../screens/Client/OrdersScreen';

const Stack = createNativeStackNavigator();

export default function ClientNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClientHome" component={ClientHomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Orders" component={OrdersScreen} options={{ title: 'My Orders' }} />
    </Stack.Navigator>
  );
} 