import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background';
import Signup from './Signup';
import { UserContext } from './UserContext';


function Profile(props) {
   const {user}=useContext(UserContext);
   const {email}=useContext(UserContext);
    console.log("Profile name from context:", {user}); 
    return (
        <Background>
            <View style={{ height: '200%', width: '430%', backgroundColor: 'rgba(5, 0, 0,0.5)', marginLeft: -150, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', height: 600, width: 325, marginBottom: 50, borderRadius: 24 }}>
                    <View style={{ backgroundColor: 'black', height: '30%', borderTopEndRadius: 24, borderTopLeftRadius: 24 }}></View>
                    <View style={{ borderRadius: 100, height: 140, width: 140, backgroundColor: 'white', position: 'absolute', marginLeft: 90, marginTop: 110 }}></View>
                    <View>
                        <Text style={{ fontSize: 35, textAlign: 'center', marginTop: 100 }}>{user}</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 10 }}>{email}</Text>
                        <TouchableOpacity 
                          style={{ backgroundColor: 'black', width: 150, height: 60, borderRadius: 24, justifyContent: 'center', marginLeft: 82, marginTop: 100 }}>
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', fontSize: 20, color: 'white' }}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
}

export default Profile;
