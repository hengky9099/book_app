import * as React from 'react';
import ContainerTesting from '../../../src/helpers/reduxTesting';
import Login from '../../../src/screens/login/index';
import '@testing-library/jest-dom/extend-expect';
import {create, act} from 'react-test-renderer';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

const navigation = {
  navigate: jest.fn(),
};

describe('Login Testing', () => {
  const component = create(ContainerTesting(<Login navigation={navigation} />));
  const root = component.root;
  const {login} = root.props.store.getState();
  describe('Login State Testing', () => {
    test('State Testing', () => {
      expect(root.props.store).toBeTruthy();
      expect(login).toBeTruthy();
      expect(typeof login.email).toEqual('string');
      expect(typeof login.password).toEqual('string');
      expect(typeof login.token).toEqual('string');
    });
  });

  describe('button to register', () => {
    test('navigate to register', () => {
      const buttonregister = component.root.findByProps({
        testID: 'RegisterButton',
      }).props;

      act(() => buttonregister.onPress());
      expect(navigation.navigate).toBeCalledWith('Register');
    });
  });

  describe('button to Home', () => {
    test('navigate to Home', () => {
      const buttonhome = component.root.findByProps({
        testID: 'HomeButton',
      }).props;

      act(() => buttonhome.onPress());
      expect(navigation.navigate).toBeCalledWith('Register');
    });
  });

  describe('Snapshot Login', () => {
    test('Snapshot', () => {
      const tree = create(ContainerTesting(<Login />));
      expect(tree).toMatchSnapshot();
    });
  });
});
