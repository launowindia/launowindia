import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function LoginScreen({ navigation, onLogin }: any) {
  const [role, setRole] = useState('user');
  // Add username/password state as needed

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* Add username/password fields here if needed */}
      <Text style={{ marginBottom: 10 }}>Select Role:</Text>
      <Picker selectedValue={role} onValueChange={setRole} style={{ marginBottom: 20, width: '100%' }}>
        <Picker.Item label="User" value="user" />
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Vendor" value="vendor" />
        <Picker.Item label="Rider" value="rider" />
      </Picker>
      <Button title="Login" onPress={() => onLogin(role)} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
}); 