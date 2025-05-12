import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const notifications = [
  { id: 1, message: 'Your order has been picked up.' },
  { id: 2, message: 'Your payment was successful.' },
];

export default function NotificationScreen() {
  return (
    <ScrollView style={styles.container}>
      {notifications.map(n => (
        <Card key={n.id} style={styles.card}>
          <Card.Content>
            <Text>{n.message}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa', padding: 8 },
  card: { marginBottom: 12 }
}); 