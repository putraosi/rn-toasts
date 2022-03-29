import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const getRandomMessage = () => {
  const number = Math.trunc(Math.random() * 10000);

  return `Random Message ${number}`;
};

const Message = ({message, onHide}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide();
    });
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <Text>{message}</Text>
    </Animated.View>
  );
};

const ToastFirst = ({navigation}) => {
  const [message, setMessage] = useState([]);

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      activeOpacity={1}
      onPress={() => navigation.goBack()}>
      <View
        style={{
          position: 'absolute',
          top: 10,
          left: 0,
          right: 0,
        }}>
        {message.map(items => (
          <Message
            key={items}
            message={items}
            onHide={() => {
              setMessage(item => item.filter(current => current != items));
            }}
          />
        ))}
      </View>

      <Button
        title="Add Message"
        onPress={() => {
          const _message = getRandomMessage();
          setMessage([...message, _message]);
        }}
      />
    </TouchableOpacity>
  );
};

export default ToastFirst;

const styles = StyleSheet.create({});
