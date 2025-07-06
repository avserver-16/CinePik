import React, { useState, createContext, useContext } from 'react';
import { TextInput, Text, TouchableOpacity, View } from 'react-native';
import Background from './Background';
import { UserContext } from './UserContext';



function Signup({ navigation, setInputName }) {
  const [inputName, setChangeName] = useState('');
  const { user, setUser, email, setEmail } = useContext(UserContext);
  const [inputText, setInputText] = useState('');
  const [showHello, setShowHello] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [wPass, setWPass] = useState('');
  const [cPass, setCPass] = useState('');
  const equalPass = wPass === cPass;
  console.log(inputName);
  return (
    <Background>
      <View style={{ height: '101%', width: '100%', top: -458, backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <View style={{
          width: 350, height: 750, backgroundColor: '#000', alignSelf: 'center', top: 70, padding: 16, borderRadius: 16,
          borderWidth: 2, borderColor: '#FF9100', paddingTop: 40
        }}>
          <TextInput
            style={
              {
                backgroundColor: 'rgba(255, 145, 0,1)',
                height: '15%', width: '100%',
                borderRadius: 24,
                paddingLeft: 20, fontSize: 20,
                marginBottom: 30, color: '#000', fontFamily: 'regular'
              }
            }
            placeholder='Enter Name'
            placeholderTextColor={'rgba(0,0,0,0.5)'}
            value={inputName}
            onChangeText={text => {
              setChangeName(text);
            }}
          />

          < TextInput
            style={{
              backgroundColor: 'rgba(255, 145, 0,1)',
              height: '15%', width: '100%',
              borderRadius: 24,
              paddingLeft: 20, fontSize: 20,
              marginBottom: 30, fontFamily: 'regular'
            }}
            placeholder='Em@il'
            placeholderTextColor={'rgba(0,0,0,0.5)'}
            onChangeText={(text) => {
              setInputText(text);
              setShowHello(!text.includes('@'));
            }}
            value={inputText}
          />

          {showHello && (
            <Text
              style={
                {
                  marginTop: -30, marginBottom: 20,
                  color: 'yellow', fontSize: 18,
                  fontWeight: 500, width: 200,
                  fontFamily: 'regular',alignSelf:'center'
                }
              }>
              Email should consist '@'
            </Text>
          )}

          <TextInput
            style={
              {
                backgroundColor: 'rgba(255, 145, 0,1)',
                height: '15%', width: '100%',
                borderRadius: 24,
                paddingLeft: 20, fontSize: 20,
                marginBottom: 30, fontFamily: 'regular'
              }
            }
            placeholder='P@ssword'
            placeholderTextColor={'rgba(0,0,0,0.5)'}
            secureTextEntry={true}
            value={wPass}
            onChangeText={(text) => {
              setWPass(text);
              setShowPass(text.length < 6);
            }}
          />

          {
            showPass && (
              <Text
                style={
                  {
                    marginTop: -30, marginBottom: 20,
                    color: 'yellow', fontSize: 18,
                    fontWeight: 500,
                   fontFamily: 'regular',alignSelf:'center'
                  }
                }>
                Minimum 6 Characters long
              </Text>
            )
          }

          <TextInput
            style={
              {
                backgroundColor: 'rgba(255, 145, 0,1)',
                height: '15%', width: '100%',
                borderRadius: 24,
                paddingLeft: 20, fontSize: 20,
                marginBottom: 30, fontFamily: 'regular'
              }
            }
            placeholder='Confirm Password'
            placeholderTextColor={'rgba(0,0,0,0.5)'}
            secureTextEntry={true}
            value={cPass}
            onChangeText={setCPass}
          />

          <TouchableOpacity
            style={
              equalPass
                ? { height: 80, width: 180, backgroundColor: 'black', marginTop: 30, borderRadius: 24, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 2, borderColor: '#FF9100' }
                : { height: 80, width: 180, backgroundColor: 'red', marginTop: 30, borderRadius: 24, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderWidth: 2, borderColor: '#FF9100' }
            }
            onPress={() => {
              alert('Now Login with these details');
              setUser(inputName);
              setEmail(inputText);
              navigation.navigate('Login');
            }}
          >
            <Text
              style={
                {
                  fontWeight: 200, fontSize: 35,
                  textAlign: 'center', textAlignVertical: 'center',
                  color: '#FF9100', fontFamily: 'regular'
                }
              }>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>

  );

}

export default Signup;
