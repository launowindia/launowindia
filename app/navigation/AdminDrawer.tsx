import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminHome from '../screens/AdminHome';

const Drawer = createDrawerNavigator();

export default function AdminDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Admin Home" component={AdminHome} />
    </Drawer.Navigator>
  );
} 