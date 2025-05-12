import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeliveryHomeScreen from '../screens/Delivery/HomeScreen';
import JobsScreen from '../screens/Delivery/JobsScreen';

const Stack = createNativeStackNavigator();

export default function DeliveryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeliveryHome" component={DeliveryHomeScreen} options={{ title: 'Delivery Home' }} />
      <Stack.Screen name="Jobs" component={JobsScreen} options={{ title: 'Assigned Jobs' }} />
    </Stack.Navigator>
  );
} 