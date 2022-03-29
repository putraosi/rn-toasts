import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ComingSoon, MainApp, ToastFirst, ToastSecond, ToastThird} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRoute] = useState('MainApp');

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ToastFirst"
        component={ToastFirst}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ToastSecond"
        component={ToastSecond}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ToastThird"
        component={ToastThird}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
