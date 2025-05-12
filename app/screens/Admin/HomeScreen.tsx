import * as React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function AdminHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="headlineMedium">Admin Home</Text>
      <Button mode="contained" style={{ marginTop: 16 }} onPress={() => {}}>
        View System Metrics
      </Button>
    </View>
  );
} 