import React from 'react';
import { render } from '@testing-library/react-native';
import ClientHomeScreen from '../HomeScreen';

describe('ClientHomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ClientHomeScreen />);
    expect(getByText('Client Home')).toBeTruthy();
    expect(getByText('Browse Services')).toBeTruthy();
  });
}); 