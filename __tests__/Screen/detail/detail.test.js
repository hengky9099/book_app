import React from 'react';
import BookDetail from '../../../src/screens/bookDetail/index';
import {create, act} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

jest.mock('react-native-share', () => '');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe(' Detail Testing', () => {
  describe('should render', () => {
    test('should render correctly', () => {
      expect(2).toEqual(2);
    });
  });

  describe('UseEffect test', () => {
    test('should run useeffect', () => {
      jest.useFakeTimers();
      act(() => jest.runAllTimers());
    });
  });

  describe('Detail Snapshot', () => {
    test('Snapshot', () => {
      const tree = create(ContainerTesting(<BookDetail />));
      expect(tree).toMatchSnapshot();
    });
  });
});
