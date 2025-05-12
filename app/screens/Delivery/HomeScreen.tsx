import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';

export default function DeliveryHomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={4}>
        <Card.Title
          title="Delivery Dashboard"
          subtitle="Your jobs at a glance"
          left={props => <Avatar.Icon {...props} icon="truck-delivery" />}
        />
        <Card.Content>
          <Text variant="titleMedium" style={styles.text}>
            View assigned jobs, update order status, and track your earnings.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('OrdersScreen')}>
            View Orders
          </Button>
          <Button onPress={() => navigation.navigate('EarningsScreen')}>
            Earnings
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3f2fd' },
  card: { width: '92%' },
  text: { marginBottom: 12 }
}); 