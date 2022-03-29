import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MainApp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Navigation'}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ToastFirst')}>
        <Text style={styles.label}>{'Toast First'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ToastSecond')}>
        <Text style={styles.label}>{'Toast Second'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ToastThird')}>
        <Text style={styles.label}>{'Toast Thrid'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 20,
    color: '#282828',
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },

  button: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#282828',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginTop: 16,
  },

  label: {
    fontSize: 16,
    color: '#282828',
    fontWeight: '500',
    textAlign: 'center',
  },
});
