import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Coming Soon</Text>
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  label: {
    fontSize: 20,
    color: '#282828',
    fontWeight: '700',
  },
});
