import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';

export default function PartnerHomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={4}>
        <Card.Title
          title="Service Partner"
          subtitle="Manage your operations"
          left={props => <Avatar.Icon {...props} icon="washing-machine" />}
        />
        <Card.Content>
          <Text variant="titleMedium" style={styles.text}>
            Accept/reject orders, update inventory, and monitor performance.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('OrdersScreen')}>
            Orders
          </Button>
          <Button onPress={() => navigation.navigate('InventoryScreen')}>
            Inventory
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f8e9' },
  card: { width: '92%' },
  text: { marginBottom: 12 }
}); 