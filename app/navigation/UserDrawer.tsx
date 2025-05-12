import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClientHome from '../screens/ClientHome';
import ServicesScreen from '../screens/ServicesScreen';

const Drawer = createDrawerNavigator();

export default function UserDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ClientHome} />
      <Drawer.Screen name="Browse Services" component={ServicesScreen} />
    </Drawer.Navigator>
  );
} 