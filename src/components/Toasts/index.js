import React, {useEffect, useRef, useState} from 'react';
import {
  DeviceEventEmitter,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {SHOW_TOAST_MESSAGE} from '../../utils';

const colors = {
  info: '#343a40',
  success: '#28a745',
  danger: '#dc3545',
};

const Toasts = () => {
  const [messageType, setMessageType] = useState(null);
  const [message, setMessage] = useState(null);
  const [timeOutDuration, setTimeOutDuration] = useState(5000);

  const timeOutRef = useRef(null);

  useEffect(() => {
    if (message) {
      timeOutRef.current = setInterval(() => {
        if (timeOutDuration <= 0) closeToast();
        else setTimeOutDuration(prev => prev - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(timeOutRef.current);
    };
  }, [message, timeOutDuration]);

  useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  const onNewToast = data => {
    if (Platform.OS == 'android' && data.useNativeToast)
      return ToastAndroid.show(data.message, ToastAndroid.LONG);

    if (data.duration) setTimeOutDuration(data.duration);

    setMessage(data.message);
    setMessageType(data.type);
  };

  const closeToast = () => {
    setMessage(null);
    setTimeOutDuration(5000);
  };

  if (!message) return null;

  return (
    <View
      style={{
        position: 'absolute',
        bottom: '4%',
        left: '4%',
        right: '4%',
        backgroundColor: colors[messageType],
        zIndex: 1,
        elevation: 1,
        borderRadius: 4,
      }}>
      <TouchableOpacity>
        <Text
          style={{
            padding: 14,
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          }}>
          {message}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Toasts;

const styles = StyleSheet.create({});
