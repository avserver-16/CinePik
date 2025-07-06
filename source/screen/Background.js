import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';

const Background = ({ children }) => {
  return (


    <View style={{ backgroundColor: 'black', height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('./bgnew.jpg')} style={{ height: '105%', width: '100%',top:445}} />
      {children}
    </View>


  );
}

export default Background;