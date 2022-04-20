import React from 'react';
import Home from '../../../src/screens/home/index';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

describe('Home Testing', () => {
  describe('Home State Testing', () => {
    const component = create(ContainerTesting(<Home />));
    const root = component.root;
    const {home} = root.props.store.getState();
    test('State Testing', () => {
      expect(root.props.store).toBeTruthy();
      expect(home).toBeTruthy();
      expect(typeof home.recommendeds).toEqual('object');
      expect(typeof home.detailBook).toEqual('object');
    });
  });

  describe('Home Snapshot', () => {
    const tree = create(ContainerTesting(<Home />));
    expect(tree).toMatchSnapshot();
  });
});
