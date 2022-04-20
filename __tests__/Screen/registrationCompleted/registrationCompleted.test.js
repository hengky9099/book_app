import * as React from 'react';
import {create, act} from 'react-test-renderer';
import reduxTesting from '../../../src/helpers/reduxTesting';
import RegistrationCompleted from '../../../src/screens/registrationCompleted/index';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('@react-navigation/native');

const navigation = {
  navigate: jest.fn(),
};

describe('Registration Completed Testing', () => {
  const component = create(
    reduxTesting(<RegistrationCompleted navigation={navigation} />),
  );
  const root = component.root;

  describe('button to login', () => {
    test('navigate to login', () => {
      const button = component.root.findByProps({
        testID: 'RegistrationCompletedButton',
      }).props;

      act(() => button.onPress());
      expect(navigation.navigate).toBeCalledWith('Login');
    });
  });

  describe('should render', () => {
    test('default element', async () => {
      expect(root.props.store).toBeTruthy();
    });

    describe('Snapshot testing', () => {
      test('Snapshot', () => {
        const tree = create(<RegistrationCompleted />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
