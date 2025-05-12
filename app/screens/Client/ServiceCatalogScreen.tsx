import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';

const services = [
  { name: 'Wash & Fold', icon: 'tshirt-crew', desc: 'Everyday laundry, washed and folded.' },
  { name: 'Dry Cleaning', icon: 'hanger', desc: 'Professional dry cleaning for your best clothes.' },
  { name: 'Ironing', icon: 'iron', desc: 'Crisp, wrinkle-free garments.' },
];

export default function ServiceCatalogScreen() {
  return (
    <ScrollView style={styles.container}>
      {services.map((service, idx) => (
        <Card key={idx} style={styles.card} elevation={2}>
          <Card.Title
            title={service.name}
            left={props => <Avatar.Icon {...props} icon={service.icon} />}
          />
          <Card.Content>
            <Text>{service.desc}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">Book Now</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa', padding: 8 },
  card: { marginBottom: 16 }
}); 