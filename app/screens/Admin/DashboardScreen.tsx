import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';

export default function AdminDashboardScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={4}>
        <Card.Title
          title="Admin Dashboard"
          subtitle="System overview"
          left={props => <Avatar.Icon {...props} icon="shield-account" />}
        />
        <Card.Content>
          <Text variant="titleMedium" style={styles.text}>
            Onboard partners, view system stats, and manage offers.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('PartnersScreen')}>
            Partners
          </Button>
          <Button onPress={() => navigation.navigate('StatsScreen')}>
            System Stats
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff3e0' },
  card: { width: '92%' },
  text: { marginBottom: 12 }
}); 