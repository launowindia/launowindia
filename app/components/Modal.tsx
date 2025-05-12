import * as React from 'react';
import { Modal as PaperModal, Portal, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface ModalProps {
  visible: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
}

export default function Modal({ visible, onDismiss, children }: ModalProps) {
  return (
    <Portal>
      <PaperModal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
        {children}
      </PaperModal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
}); 