import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './index';

const Root = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default Root;