import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Avatar, Button } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Priya Sharma"
          subtitle="priya@example.com"
          left={props => <Avatar.Icon {...props} icon="account" />}
        />
        <Card.Content>
          <Text>Member since: Jan 2024</Text>
          <Text>Loyalty Points: 120</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained">Edit Profile</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f7fa' },
  card: { width: '92%' }
}); 