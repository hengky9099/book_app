import * as React from 'react';
import ContainerTesting from '../../../src/helpers/reduxTesting';
import Login from '../../../src/screens/login/index';
import '@testing-library/jest-dom/extend-expect';
import {create} from 'react-test-renderer';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

const mocked = jest.fn();

describe('Login Testing', () => {
  describe('Login State Testing', () => {
    const component = create(ContainerTesting(<Login />));
    const root = component.root;
    const {login} = root.props.store.getState();
    test('State Testing', () => {
      expect(root.props.store).toBeTruthy();
      expect(login).toBeTruthy();
      expect(typeof login.email).toEqual('string');
      expect(typeof login.password).toEqual('string');
      expect(typeof login.token).toEqual('string');
    });
  });

  describe('Snapshot Login', () => {
    test('Snapshot', () => {
      const tree = create(ContainerTesting(<Login />));
      expect(tree).toMatchSnapshot();
    });
  });
});
