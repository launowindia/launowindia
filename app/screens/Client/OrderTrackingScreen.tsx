import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, ProgressBar } from 'react-native-paper';

export default function OrderTrackingScreen() {
  // Example order status
  const status = 'Cleaning';
  const progress = 0.6;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Order Tracking" />
        <Card.Content>
          <Text variant="titleMedium">Order #12345</Text>
          <Text>Status: {status}</Text>
          <ProgressBar progress={progress} color="#1976d2" style={{ marginVertical: 16 }} />
          <Text>Estimated Delivery: Today, 6:00 PM</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f7fa' },
  card: { width: '92%' }
}); 