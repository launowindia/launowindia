import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RiderHome from '../screens/RiderHome';

const Drawer = createDrawerNavigator();

export default function RiderDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Rider Home" component={RiderHome} />
    </Drawer.Navigator>
  );
} 