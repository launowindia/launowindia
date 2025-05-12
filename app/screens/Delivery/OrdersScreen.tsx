import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const orders = [
  { id: 'D-1001', status: 'Picked Up', address: '123 Main St' },
  { id: 'D-1002', status: 'In Transit', address: '456 Oak Ave' },
];

export default function DeliveryOrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      {orders.map((order, idx) => (
        <Card key={idx} style={styles.card}>
          <Card.Title title={`Order ${order.id}`} subtitle={order.status} />
          <Card.Content>
            <Text>Address: {order.address}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">Update Status</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e3f2fd', padding: 8 },
  card: { marginBottom: 16 }
}); 