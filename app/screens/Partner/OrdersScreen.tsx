import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const orders = [
  { id: 'P-2001', status: 'Received', customer: 'Priya Sharma' },
  { id: 'P-2002', status: 'Cleaning', customer: 'Amit Verma' },
];

export default function PartnerOrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      {orders.map((order, idx) => (
        <Card key={idx} style={styles.card}>
          <Card.Title title={`Order ${order.id}`} subtitle={order.status} />
          <Card.Content>
            <Text>Customer: {order.customer}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">Update Stage</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f8e9', padding: 8 },
  card: { marginBottom: 16 }
}); 