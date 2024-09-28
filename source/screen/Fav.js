import React from 'react';
import {View, ImageBackground,TouchableOpacity,Text} from 'react-native';
import Background from './Background'; 

function Fav(props) {
    return (
        <Background>
        <View style={{height:'200%',width:'430%',backgroundColor:'rgba(5, 0, 0,0.5)',marginLeft:-150}}>
        <Text 
        style={{
            fontSize:45,
        marginTop:120,
        marginLeft:-55,
        height:125,
        color:'#FF9100',
        backgroundColor:'black',
        width:500,
        paddingTop:40,
        textAlign:'center',
        verticalAlign:'middle'}}>
            Favourites</Text>
   </View>
</Background>
    );
}

export default Fav;