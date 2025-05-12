import React from 'react';
import { render } from '@testing-library/react-native';
import DeliveryHomeScreen from '../HomeScreen';

describe('DeliveryHomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<DeliveryHomeScreen />);
    expect(getByText('Delivery Partner Home')).toBeTruthy();
    expect(getByText('View Assigned Jobs')).toBeTruthy();
  });
}); 