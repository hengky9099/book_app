import React from 'react';
import {render} from 'react-native-testing-library';
import NoInternetConnection from '../../src/component/NoInternetConnection';

describe('registration completed testing', () => {
  describe('should render correctly', () => {
    const {getByTestId, toJSON} = render(<NoInternetConnection />);
    test('test component styles', () => {
      const element = getByTestId('NoInternetConnection');
      expect(element).toBeTruthy();
      expect(toJSON());
    });
  });
});
