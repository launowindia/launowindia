import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const partners = [
  { id: 'A-4001', name: 'CleanCo', status: 'Active' },
  { id: 'A-4002', name: 'WashPro', status: 'Pending' },
];

export default function AdminPartnersScreen() {
  return (
    <ScrollView style={styles.container}>
      {partners.map((partner, idx) => (
        <Card key={idx} style={styles.card}>
          <Card.Title title={partner.name} subtitle={partner.status} />
          <Card.Content>
            <Text>ID: {partner.id}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">Manage</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff3e0', padding: 8 },
  card: { marginBottom: 16 }
});
