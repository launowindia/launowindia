import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function DeliveryEarningsScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Earnings" />
        <Card.Content>
          <Text variant="titleMedium">This Week: $120</Text>
          <Text>Total: $2,340</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3f2fd' },
  card: { width: '92%' }
}); 