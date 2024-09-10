import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background'; // Adjust the path if necessary

const Home = ({navigation}) => {
  return (
    <Background >
         <Text style={{color:'black',fontSize:81,marginLeft:-85,width:350,fontWeight:300}}>CinePik</Text>
       
    <TouchableOpacity style={{height:'13%',width:300,backgroundColor:'#FF9100',alignContent:'center',justifyContent:'center',margin:10,marginTop:250,marginLeft:-105,borderRadius:16}}  
    onPress={()=>{navigation.navigate('Login')}}><Text style={{fontSize:30,textAlign:'center',color:'black',fontWeight:200}}>Login</Text></TouchableOpacity>
    <TouchableOpacity style={{height:'13%',width:300,backgroundColor:'black',alignContent:'center',justifyContent:'center',margin:10,marginLeft:-105,borderRadius:16}}  
    onPress={()=>navigation.navigate('Signup')}>
      <Text style={{fontSize:30,textAlign:'center',color:'#FF9100',fontWeight:200}}>Signup</Text></TouchableOpacity>
    </Background>
  );
};

export default Home;