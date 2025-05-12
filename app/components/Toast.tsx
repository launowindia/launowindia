import * as React from 'react';
import { Snackbar } from 'react-native-paper';

interface ToastProps {
  visible: boolean;
  onDismiss: () => void;
  message: string;
  duration?: number;
}

export default function Toast({ visible, onDismiss, message, duration = 3000 }: ToastProps) {
  return (
    <Snackbar visible={visible} onDismiss={onDismiss} duration={duration}>
      {message}
    </Snackbar>
  );
} 