import React from 'react';
import {View, ImageBackground,TouchableOpacity,Text} from 'react-native';

const Background = ({ children }) => {
  return ( 
   
    <View style={{ backgroundColor:'green', height:'100%',width:'100%',alignContent:'center',justifyContent:'center' }}>  
 
    

      <View style={{ position: "absolute", backgroundColor:'black',height:'100%',width:'100%',padding:150,alignContent:'center',justifyContent:'center' }}>
         
      <ImageBackground source={require('./bgnew.jpg')} style={{height:'210%',position:'absolute',width:'210%',marginLeft:-10,marginBottom:-20}}/>

       
        
        {children}
     
      </View>
    </View>
    
  );
}

export default Background;