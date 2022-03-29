import React, {useRef, useState} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcClose, IcFail, IcSuccess} from '../../assets';

const ToastSecond = ({navigation}) => {
  const windowHeight = Dimensions.get('window').height;
  const [status, setStatus] = useState(null);
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  const successColor = '#6dcf81';
  const successHeader = 'Success!';
  const successMessage = 'You pressed the success button';
  const failColor = '#bf6060';
  const failHeader = 'Failed!';
  const failMessage = 'You pressed the fail button';

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.35 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut);
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.goBack()}
      activeOpacity={1}>
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{translateY: popAnim}],
          },
        ]}>
        <View style={styles.toastRow}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={status == 'success' ? IcSuccess : IcFail}
          />
          <View style={styles.toastText}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              {status === 'success' ? successHeader : failHeader}
            </Text>

            <Text style={{fontSize: 12}}>
              {status === 'success' ? successMessage : failMessage}
            </Text>
          </View>

          <TouchableOpacity onPress={instantPopOut}>
            <Image
              style={{
                width: 16,
                height: 16,
              }}
              source={IcClose}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Button
        title="Success Message"
        onPress={() => {
          setStatus('success');
          popIn();
        }}
      />

      <Button
        title="Fail Message"
        onPress={() => {
          setStatus('fail');
          popIn();
        }}
      />
    </TouchableOpacity>
  );
};

export default ToastSecond;

const styles = StyleSheet.create({
  toastContainer: {
    height: 60,
    width: 350,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  toastRow: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  toastText: {
    width: '70%',
    padding: 2,
  },
});
