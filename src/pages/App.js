import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import {Toasts} from '../components';
import Router from '../router';

const MainApp = () => {
  LogBox.ignoreLogs(['Require cycle: ...']);

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>

      <Toasts />
    </>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
