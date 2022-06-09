import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#06bcee',
        color: '#ffffff',
      }}>
      <ActivityIndicator size="large" color="#555" />
    </View>
  );
};

export default SplashScreen;
