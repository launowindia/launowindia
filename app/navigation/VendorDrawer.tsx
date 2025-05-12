import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import VendorHome from '../screens/VendorHome';

const Drawer = createDrawerNavigator();

export default function VendorDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Vendor Home" component={VendorHome} />
    </Drawer.Navigator>
  );
} 