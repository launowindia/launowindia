import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Text, List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function OrdersScreen() {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text variant="titleLarge">My Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={`Order #${item.id}`}
            description={`Status: ${item.status}`}
            left={props => <List.Icon {...props} icon="tshirt-crew" />}
          />
        )}
        ListEmptyComponent={<Text>No orders found.</Text>}
      />
    </View>
  );
} 