import React from 'react';
import { render } from '@testing-library/react-native';
import PartnerHomeScreen from '../HomeScreen';

describe('PartnerHomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<PartnerHomeScreen />);
    expect(getByText('Service Partner Home')).toBeTruthy();
    expect(getByText('Accept/Reject Orders')).toBeTruthy();
  });
}); 