import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import Background from './Background';
import { MaterialIcons } from '@expo/vector-icons';


function Login({ navigation }) {
  const [inputText, setInputText] = useState('');
  const [showHello, setShowHello] = useState(false);
  const [showPass, setShowpass] = useState(false);
  const [pass, setPass] = useState(false);
  const [vis, setVis] = useState('visibility-off')


  return (
    <Background>
      <View style={{ height: '101%', width: '100%', top: -458, backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <View style={{ width: 350, height: 500, backgroundColor: '#000', alignSelf: 'center', top: 180, padding: 16, borderRadius: 16 ,borderWidth:2,borderColor:'#FF9100'}}>
          <TextInput
            style={{
              height: 80, width: '100%', backgroundColor: 'rgba(255, 145, 0,1)', borderRadius: 16, paddingLeft: 20, fontSize: 24,
              marginBottom: 30, marginTop: 40, color: '#000', fontFamily: 'light'
            }}
            placeholder='Enter Em@il'
            placeholderTextColor={'rgba(0,0,0,0.3)'}
            keyboardType='email-address'

            onChangeText={(text) => {
              setInputText(text);
              if (text.includes('@')) {
                setShowHello(false);
              } else {
                setShowHello(true);
              }
            }}
            value={inputText}
          />

          {showHello && (
            <Text
              style={{ marginTop: -30, marginBottom: 30, color: 'yellow', fontSize: 18, fontWeight: 500, alignSelf: 'center', fontFamily: 'xlight' }}>
              Email should consist '@'
            </Text>)}


          <TextInput
            secureTextEntry={pass}
            style={{ height: 80, width: '100%', backgroundColor: 'rgba(255, 145, 0,1)', borderRadius: 24, paddingLeft: 20, fontSize: 24, fontFamily: 'light' }}
            placeholder='Enter P@ssword'
            placeholderTextColor={'rgba(0,0,0,0.3)'}
            onChangeText={(text) => {

              if (text.length >= 6) {
                setShowpass(false);
              }
              else {
                setShowpass(true)
              }
            }} />
          <TouchableOpacity style={{
            height: 50, width: 50, backgroundColor: '#FF9100', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 180, left: 280
          }} onPress={() => { setPass(!pass); setVis(pass ? 'visibility-off' : 'visibility'); }}>
            <MaterialIcons name={vis} size={30} color="#000" />
          </TouchableOpacity>
          {showPass && (
            <Text
              style={{ marginBottom: 0, color: 'yellow', fontSize: 18, fontWeight: 500, alignSelf: 'center', fontFamily: 'xlight' }}>
              Minimum 6 Characters long
            </Text>)}



          <TouchableOpacity
            style={{ height: 80, width: 200, backgroundColor: 'black', marginTop: 60, alignSelf: 'center', borderRadius: 24, borderWidth: 2, borderColor: '#FF9100', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              alert('Successfull Login');
              navigation.navigate('MainTabs')
            }}>
            <Text style={{ fontSize: 35, textAlign: 'center', textAlignVertical: 'center', color: '#FF9100', fontFamily: 'light' }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={{ width: 300, marginTop: 10, fontSize: 16, fontFamily: 'xlight', color: '#FF9100', left: 40 }}>Do not have an account? <Text style={{ fontSize: 18, fontWeight: 500, color: '#FF9100', fontFamily: 'bold' }} onPress={() => { navigation.navigate('Signup') }}> Sign Up</Text></Text>
        </View>
      </View></Background>
  );
}

export default Login;