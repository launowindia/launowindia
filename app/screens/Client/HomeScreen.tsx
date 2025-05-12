import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';

export default function ClientHomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={4}>
        <Card.Title
          title="Welcome to Launow"
          subtitle="Your on-demand clothing care"
          left={props => <Avatar.Icon {...props} icon="tshirt-crew" />}
        />
        <Card.Content>
          <Text variant="titleMedium" style={styles.text}>
            Book a pickup, track your order, and enjoy premium laundry services.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('ServiceCatalog')}>Browse Services</Button>
          <Button onPress={() => navigation.navigate('OrderTracking')}>Track Order</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f7fa' },
  card: { width: '92%' },
  text: { marginBottom: 12 }
}); 