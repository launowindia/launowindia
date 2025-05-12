import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminHomeScreen from '../screens/Admin/HomeScreen';
import PartnersScreen from '../screens/Admin/PartnersScreen';

const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AdminHome" component={AdminHomeScreen} options={{ title: 'Admin Home' }} />
      <Stack.Screen name="Partners" component={PartnersScreen} options={{ title: 'Service Partners' }} />
    </Stack.Navigator>
  );
} 