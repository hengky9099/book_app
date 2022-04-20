import 'react-native';
import * as React from 'react';
import NoInternetConnection from '../../src/component/NoInternetConnection';
import renderer from 'react-test-renderer';

describe('NoInternetConnection Component Testing', () => {
  // test('should render', async () => {
  //   const component = create(ContainerTesting(<NoInternetConnection />));
  //   const root = component.root;
  //   expect(root.props.styles.name.fontSize).toEqual(14);
  // });
  describe('Registration Completed Snapshot', () => {
    test('Snapshot', () => {
      const tree = renderer.create(<NoInternetConnection />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // test('Snapshot', () => {
    //   expect(2).toBe(2);
    // });
  });
});
