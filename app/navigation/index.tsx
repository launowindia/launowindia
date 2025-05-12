import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientNavigator from './ClientNavigator';
import DeliveryNavigator from './DeliveryNavigator';
import PartnerNavigator from './PartnerNavigator';
import AdminNavigator from './AdminNavigator';

// TODO: Replace with real auth/role logic
const getUserRole = () => 'client'; // 'delivery', 'partner', 'admin'

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const role = getUserRole();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {role === 'client' && (
        <Stack.Screen name="Client" component={ClientNavigator} />
      )}
      {role === 'delivery' && (
        <Stack.Screen name="Delivery" component={DeliveryNavigator} />
      )}
      {role === 'partner' && (
        <Stack.Screen name="Partner" component={PartnerNavigator} />
      )}
      {role === 'admin' && (
        <Stack.Screen name="Admin" component={AdminNavigator} />
      )}
    </Stack.Navigator>
  );
} 