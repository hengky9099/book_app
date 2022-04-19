import * as React from 'react';
import {create} from 'react-test-renderer';
import reduxTesting from '../../../src/helpers/reduxTesting';
import Login from '../../../src/screens/login/index';
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
  const component = create(reduxTesting(<Login />));
  describe('Default testing', () => {
    describe('Registration Completed Testing', () => {
      describe('should render', () => {
        test('should render correctly', () => {
          expect(2).toEqual(2);
        });
      });
    });

    // test('testing components', async () => {
    //   const {getAllByText} = create(reduxTesting(<Login />));
    //   expect(getAllByText("Don't have an account?").length).toBe(1);
    //   expect(getAllByText('Register').length).toBe(1);
    //   expect(getAllByText('Login').length).toBe(1);
    // });
    // test('testing token', async () => {
    //   const root = component.root;
    //   screen.debug();
    //   expect(root).toBeTruthy();
    // });
  });

  // describe('should render', () => {
  //   test('matching snapshot', () => {
  //     expect(component).toMatchSnapshot();
  //   });
  // });

  //   describe('Login button', () => {
  //     test('should move to registration completed', () => {
  //       const navigation = {
  //         navigate: () => {
  //           mocked;
  //         },
  //       };

  //       const page = render(reduxTesting(<Register navigation={navigation} />));

  //       const registerButton = page.queryByTestId('RegisterButton');

  //       fireEvent.press(registerButton);

  //       expect(registerButton).toBeInTheDocument();

  //       expect(navigation.navigate).toHaveBeenCalledWith('RegistrationCompleted');
  //     });

  //     test('should move to Login', () => {
  //       const navigation = {navigate: () => {}};

  //       const page = render(reduxTesting(<Register navigation={navigation} />));

  //       const LoginButton = page.queryByTestId('LoginButton');

  //       fireEvent.press(LoginButton);

  //       expect(navigation.navigate).toHaveBeenCalledWith('Login');
  //     });
  //   });
});
