import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Text, List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function JobsScreen() {
  const jobs = useSelector((state: RootState) => state.orders.orders); // Reuse orders for demo

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text variant="titleLarge">Assigned Jobs</Text>
      <FlatList
        data={jobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={`Job #${item.id}`}
            description={`Status: ${item.status}`}
            left={props => <List.Icon {...props} icon="truck" />}
          />
        )}
        ListEmptyComponent={<Text>No jobs assigned.</Text>}
      />
    </View>
  );
} 