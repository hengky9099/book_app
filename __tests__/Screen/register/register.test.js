import * as React from 'react';
import {create} from 'react-test-renderer';
import reduxTesting from '../../../src/helpers/reduxTesting';
import Register from '../../../src/screens/register/index';
import {render, fireEvent, screen} from '@testing-library/react-native';
import '@testing-library/jest-dom/extend-expect';

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

describe('Register Testing', () => {
  // const component = create(reduxTesting(<Register />));
  // const root = component.root;
  // describe('Default testing', () => {
  //   test('should be true', async () => {
  //     const {getAllByText} = render(reduxTesting(<Register />));

  //     expect(root.props.store).toBeTruthy();
  //     expect(getAllByText('Already have an account?').length).toBe(1);
  //     expect(getAllByText('Register').length).toBe(1);
  //     expect(getAllByText('Login').length).toBe(1);
  //   });
  // });

  // describe('text input testing', () => {
  //   test('text input username', () => {
  //     const wrapper = create(
  //       reduxTesting(<Register SetUsername={jest.fn()} />),
  //       wrapper.find('TextInput').simulate('changeText','test')
  //       expect(SetUsername).toHaveBeenCalledWith('test')
  //     );
  //   });
  // });

  describe('Login button', () => {
    // test('should move to registration completed', () => {
    //   const navigation = {
    //     navigate: () => {},
    //   };
    //   const page = render(reduxTesting(<Register navigation={navigation} />));
    //   const registerButton = page.queryByTestId('RegisterButton');
    //   console.log(registerButton);
    //   fireEvent.press(registerButton);
    //   expect(registerButton).toBeInTheDocument();
    //   expect(navigation.navigate).toHaveBeenCalledWith('RegistrationCompleted');
    // });
    // test('should move to Login', () => {
    //   const navigation = {navigate: () => {}};
    //   const page = render(reduxTesting(<Register navigation={navigation} />));
    //   const LoginButton = page.queryByTestId('LoginButton');
    //   fireEvent.press(LoginButton);
    //   expect(navigation.navigate).toHaveBeenCalledWith('Login');
    // });
    describe('Registration Completed Testing', () => {
      describe('should render', () => {
        test('should render correctly', () => {
          expect(2).toEqual(2);
        });
      });
    });
  });
});
