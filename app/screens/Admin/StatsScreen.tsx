import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function AdminStatsScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="System Stats" />
        <Card.Content>
          <Text variant="titleMedium">Active Users: 1,234</Text>
          <Text>Orders Today: 56</Text>
          <Text>Revenue: $4,500</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff3e0' },
  card: { width: '92%' }
}); 