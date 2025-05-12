import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PartnerHomeScreen from '../screens/Partner/HomeScreen';
import InventoryScreen from '../screens/Partner/InventoryScreen';

const Stack = createNativeStackNavigator();

export default function PartnerNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PartnerHome" component={PartnerHomeScreen} options={{ title: 'Partner Home' }} />
      <Stack.Screen name="Inventory" component={InventoryScreen} options={{ title: 'Inventory' }} />
    </Stack.Navigator>
  );
} 