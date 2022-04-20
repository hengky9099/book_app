/* eslint-disable no-undef */
jest.mock('@react-native-community/push-notification-ios', () => {
  return {
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve()),
  };
});

jest.mock('react-native-gesture-handler', () => {
  return {
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve()),
  };
});

jest.mock('react-native-blob-util', () => {
  return {
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve()),
  };
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
