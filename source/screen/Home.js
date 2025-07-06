import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background'; // Adjust the path if necessary
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <Background>
      <View style={{ height: '101%', width: '100%', top: -458, backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <Text style={{ color: '#FF9100', fontSize: 80, fontFamily: 'bold', alignSelf: 'center', width: 270, top: 150 }}>CinePik</Text>

        <TouchableOpacity style={{
          height: 80, width: 350, backgroundColor: '#FF9100', alignContent: 'center', justifyContent: 'center', margin: 10, borderRadius: 16, alignSelf: 'center',
          top: 200, borderWidth: 2, borderColor: 'black'
        }}
          onPress={() => { navigation.navigate('Login') }}><Text style={{ fontSize: 30, textAlign: 'center', color: 'black', fontWeight: 200, fontFamily: 'regular' }}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={{
          height: 80, width: 350, backgroundColor: '#000', alignContent: 'center',
          justifyContent: 'center', margin: 10, borderRadius: 16, alignSelf: 'center', top: 220, borderWidth: 2, borderColor: '#FF9100'
        }}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{ fontSize: 30, textAlign: 'center', color: '#FF9100', fontWeight: 200, fontFamily: 'regular' }}>Signup</Text></TouchableOpacity>
        <View style={{ width: '100%', height: 200, backgroundColor: 'black', top: 330, borderTopEndRadius: 30, borderTopLeftRadius: 30 }}>
          <TouchableOpacity style={{
            height: 60, width: 300, backgroundColor: 'black', borderRadius: 16, borderWidth: 2, borderColor: '#FF9100', borderStyle: 'dashed',
            alignItems: 'center', justifyContent: 'center', alignSelf: 'center', top: 30
          }} onPress={() => navigation.navigate('MainTabs')}><Text style={{ color: '#FF9100', fontFamily: 'regular', fontSize: 20, left: -10 ,top:0}}>Explore without Signing in
            </Text><MaterialIcons name="arrow-forward" size={30} color="#FF9100" style={{alignSelf:"flex-end",position:'absolute',right:10 }} /></TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Home;