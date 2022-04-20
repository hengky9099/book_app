import * as React from 'react';
import Register from '../../../src/screens/register/index';
import '@testing-library/jest-dom/extend-expect';
import {create} from 'react-test-renderer';
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

describe('Register Testing', () => {
  describe('State Testing', () => {
    const component = create(ContainerTesting(<Register />));
    const root = component.root;
    const {register} = root.props.store.getState();
    test('state testing', () => {
      expect(root.props.store).toBeTruthy();
      expect(register).toBeTruthy();
      expect(typeof register.email).toEqual('string');
      expect(typeof register.password).toEqual('string');
      expect(typeof register.name).toEqual('string');
    });
  });

  describe('Snapshot Register', () => {
    test('Snapshot', () => {
      const tree = create(ContainerTesting(<Register />));
      expect(tree).toMatchSnapshot();
    });
  });
});
