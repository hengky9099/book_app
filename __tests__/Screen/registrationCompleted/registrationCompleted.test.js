import * as React from 'react';
import {create} from 'react-test-renderer';
import reduxTesting from '../../../src/helpers/reduxTesting';
import RegistrationCompleted from '../../../src/screens/registrationCompleted/index';
import {render} from '@testing-library/react-native';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

describe('Registration Completed Testing', () => {
  describe('should render', () => {
    test('default element', async () => {
      const {getAllByText} = render(<RegistrationCompleted />);
      const component = create(reduxTesting(<RegistrationCompleted />));
      const root = component.root;
      expect(root.props.store).toBeTruthy();
      expect(getAllByText('Registration Completed!').length).toBe(1);
    });

    test('button tests', () => {
      const {getAllByText} = render(<RegistrationCompleted />);
      expect(getAllByText('Back to Login').length).toBe(1);
    });
  });
});
