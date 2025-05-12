import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Welcome to Launow!" />
        <Card.Content>
          <Text variant="titleMedium">On-demand clothing care, just a tap away.</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('Auth')}>Get Started</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f7fa' },
  card: { width: '90%', elevation: 4 }
}); 