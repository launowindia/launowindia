import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import screens for different user roles
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AuthStack from './AuthStack';
import RegisterScreen from '../screens/auth/RegisterScreen';

// Client Screens
import ClientHomeScreen from '../screens/Client/HomeScreen';
import ServiceCatalogScreen from '../screens/Client/ServiceCatalogScreen';
// import OrderBookingScreen from '../screens/Client/OrderBookingScreen'; // Not implemented
import OrderTrackingScreen from '../screens/Client/OrderTrackingScreen';
import ProfileScreen from '../screens/Client/ProfileScreen';

// Delivery Partner Screens
import DeliveryHomeScreen from '../screens/Delivery/HomeScreen';
import DeliveryOrdersScreen from '../screens/Delivery/OrdersScreen';
import DeliveryEarningsScreen from '../screens/Delivery/EarningsScreen';

// Service Partner Screens
import PartnerHomeScreen from '../screens/Partner/HomeScreen';
import PartnerOrdersScreen from '../screens/Partner/OrdersScreen';
import PartnerInventoryScreen from '../screens/Partner/InventoryScreen';

// Admin Screens
import AdminDashboardScreen from '../screens/Admin/DashboardScreen';
import AdminPartnersScreen from '../screens/Admin/PartnersScreen';
import AdminStatsScreen from '../screens/Admin/StatsScreen';

// Shared Screens
// import ChatScreen from '../screens/ChatScreen'; // Not implemented
import NotificationScreen from '../screens/NotificationScreen';

// Types for Navigation
export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Auth: undefined;
  ClientMain: undefined;
  DeliveryMain: undefined;
  PartnerMain: undefined;
  AdminMain: undefined;
  // Chat: { partnerId: string; orderId?: string };
  Notifications: undefined;
  Register: undefined;
};

export type ClientTabParamList = {
  Home: undefined;
  Services: undefined;
  Orders: undefined;
  Profile: undefined;
};

export type DeliveryTabParamList = {
  Home: undefined;
  Orders: undefined;
  Earnings: undefined;
};

export type PartnerTabParamList = {
  Home: undefined;
  Orders: undefined;
  Inventory: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const ClientTab = createBottomTabNavigator<ClientTabParamList>();
const DeliveryTab = createBottomTabNavigator<DeliveryTabParamList>();
const PartnerTab = createBottomTabNavigator<PartnerTabParamList>();

// Client Bottom Tab Navigator
function ClientTabNavigator() {
  return (
    <ClientTab.Navigator>
      <ClientTab.Screen
        name="Home"
        component={ClientHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />, title: 'Home',
        }}
      />
      <ClientTab.Screen
        name="Services"
        component={ServiceCatalogScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />, title: 'Services',
        }}
      />
      <ClientTab.Screen
        name="Orders"
        component={OrderTrackingScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="truck" color={color} size={size} />, title: 'Orders',
        }}
      />
      <ClientTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />, title: 'Profile',
        }}
      />
    </ClientTab.Navigator>
  );
}

// Delivery Partner Bottom Tab Navigator
function DeliveryTabNavigator() {
  return (
    <DeliveryTab.Navigator>
      <DeliveryTab.Screen
        name="Home"
        component={DeliveryHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />, title: 'Home',
        }}
      />
      <DeliveryTab.Screen
        name="Orders"
        component={DeliveryOrdersScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />, title: 'Orders',
        }}
      />
      <DeliveryTab.Screen
        name="Earnings"
        component={DeliveryEarningsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="currency-usd" color={color} size={size} />, title: 'Earnings',
        }}
      />
    </DeliveryTab.Navigator>
  );
}

// Service Partner Bottom Tab Navigator
function PartnerTabNavigator() {
  return (
    <PartnerTab.Navigator>
      <PartnerTab.Screen
        name="Home"
        component={PartnerHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />, title: 'Home',
        }}
      />
      <PartnerTab.Screen
        name="Orders"
        component={PartnerOrdersScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />, title: 'Orders',
        }}
      />
      <PartnerTab.Screen
        name="Inventory"
        component={PartnerInventoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="package-variant" color={color} size={size} />, title: 'Inventory',
        }}
      />
    </PartnerTab.Navigator>
  );
}

// Main App Navigation
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* Splash and Onboarding */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />

        {/* Authentication */}
        <Stack.Screen name="Auth">
          {props => (
            <AuthStack
              {...props}
              onLogin={role => {
                // Navigate to the correct main flow based on role
                if (role === 'user') props.navigation.replace('ClientMain');
                else if (role === 'admin') props.navigation.replace('AdminMain');
                else if (role === 'vendor' || role === 'partner') props.navigation.replace('PartnerMain');
                else if (role === 'rider' || role === 'delivery') props.navigation.replace('DeliveryMain');
                else props.navigation.replace('ClientMain');
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen} />

        {/* Main App Flows */}
        <Stack.Screen name="ClientMain" component={ClientTabNavigator} />
        <Stack.Screen name="DeliveryMain" component={DeliveryTabNavigator} />
        <Stack.Screen name="PartnerMain" component={PartnerTabNavigator} />

        {/* Admin Flow */}
        <Stack.Screen name="AdminMain" component={AdminDashboardScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator; 