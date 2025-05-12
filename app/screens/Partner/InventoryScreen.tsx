import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const inventory = [
  { id: 'I-3001', name: 'Shirt', quantity: 20 },
  { id: 'I-3002', name: 'Pants', quantity: 15 },
  { id: 'I-3003', name: 'Jacket', quantity: 5 },
];

export default function PartnerInventoryScreen() {
  return (
    <ScrollView style={styles.container}>
      {inventory.map((item, idx) => (
        <Card key={idx} style={styles.card}>
          <Card.Title title={item.name} subtitle={`ID: ${item.id}`} />
          <Card.Content>
            <Text>Quantity: {item.quantity}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">Update</Button>
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