import * as React from 'react';
import Register from '../../../src/screens/register/index';
import '@testing-library/jest-dom/extend-expect';
import {create, act} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

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

describe('Register Testing', () => {
  const component = create(
    ContainerTesting(<Register navigation={navigation} />),
  );
  const root = component.root;
  const {register} = root.props.store.getState();
  describe('State Testing', () => {
    test('state testing', () => {
      expect(root.props.store).toBeTruthy();
      expect(register).toBeTruthy();
      expect(typeof register.email).toEqual('string');
      expect(typeof register.password).toEqual('string');
      expect(typeof register.name).toEqual('string');
    });
  });

  describe('To Login', () => {
    test('navigate to Login', () => {
      const buttonLogin = component.root.findByProps({
        testID: 'LoginButton',
      }).props;

      act(() => buttonLogin.onPress());
      expect(navigation.navigate).toBeCalledWith('Login');
    });
  });

  describe('Registration Success Button', () => {
    test('navigate to Registration succeed', () => {
      const buttonRegister = component.root.findByProps({
        testID: 'RegisterButton',
      }).props;

      act(() => buttonRegister.onPress());
      expect(navigation.navigate).toBeCalledWith('Login');
    });
  });

  describe('Snapshot Register', () => {
    test('Snapshot', () => {
      const tree = create(ContainerTesting(<Register />));
      expect(tree).toMatchSnapshot();
    });
  });
});
