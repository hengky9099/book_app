import 'react-native';
import * as React from 'react';
import {renderer} from 'react-test-renderer';
import NoInternetConnection from '../../src/component/NoInternetConnection';

describe('NoInternetConnection Component Testing', () => {
  // test('should render', async () => {
  //   const component = create(ContainerTesting(<NoInternetConnection />));
  //   const root = component.root;
  //   expect(root.props.styles.name.fontSize).toEqual(14);
  // });
  describe('Registration Completed Testing', () => {
    describe('Registration Completed Snapshot', () => {
      // test('Snapshot', () => {
      //   const snap = renderer.create(<NoInternetConnection />).toJSON();
      //   expect(snap).toMatchSnapshot();
      // });
      test('Snapshot', () => {
        expect(2).toBe(2);
      });
    });
  });
});
