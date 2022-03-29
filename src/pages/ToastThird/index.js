import React from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {Button} from '../../components';
import {toasts} from '../../helpers';

const ToastThird = ({navigation}) => {
  return (
    <View style={{minHeight: Dimensions.get('screen').height - 75}}>
      <Button
        title="SHOW SUCCESS"
        onPress={() =>
          toasts.success({
            message: 'Hello Toast',
            duration: 7000,
          })
        }
      />
      <Button
        title="SHOW ERROR"
        onPress={() =>
          toasts.danger({
            message: 'An a Error',
          })
        }
      />
      <Button title="SHOW INFO" onPress={() => null} />

      {Platform.OS === 'android' && (
        <Button
          title="USE NATIVE TOAST"
          onPress={() =>
            toasts.info({
              message: 'Am native lol',
              useNativeToast: true,
            })
          }
        />
      )}

      <Button title="TAKE 10 s" onPress={() => null} />

      <Button
        title="GO TO DETAIL"
        onPress={() => {
          navigation.navigate('ComingSoon');
        }}
      />
    </View>
  );
};

export default ToastThird;

const styles = StyleSheet.create({});
