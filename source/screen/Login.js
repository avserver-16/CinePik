import React ,{useState} from 'react';
import { TextInput, View ,Text,TouchableOpacity} from 'react-native';
import Background from './Background';




function Login({navigation}) {
  const [inputText, setInputText] = useState('');
  const [showHello, setShowHello] = useState(false);
  const [showPass, setShowpass] = useState(false);


    return (
        <Background>
       
        <TextInput 
        style={{height:'15%',width:'310%',backgroundColor:'rgba(0,0,0, 0.7)' ,marginLeft:-95,borderRadius:24,paddingLeft:20,fontSize:20,marginBottom:30,marginTop:400,color:'#FF9100'}} 
        placeholder='Em@il'
        placeholderTextColor={'#FF9100'}
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
        style={{marginTop:-30,marginBottom:20,color:'yellow',fontSize:18,fontWeight:500,width:200,marginLeft:-80}}>
        Email should consist '@'
        </Text>)}
   
        
        <TextInput 
        secureTextEntry={true} 
        style={{height:'15%',width:'310%',backgroundColor:'rgba(255, 145, 0,0.7)' ,marginLeft:-95,borderRadius:24,paddingLeft:20,fontSize:20}} 
        placeholder='P@ssword'
        placeholderTextColor={'black'}
        onChangeText={(text)=>{
        
          if(text.length>=6){
            setShowpass(false);
          
          }
          else{
            setShowpass(true)
          }
        }}/>
        {showPass && (
          <Text 
          style={{marginBottom:0,color:'yellow',fontSize:18,fontWeight:500,width:400,marginLeft:-80}}>
           Minimum 6 Characters long
            </Text>)}

        
       
      <TouchableOpacity 
      style={{height:55,width:180,backgroundColor:'black',marginTop:30,marginLeft:-45,borderRadius:24}} 
      onPress={()=>{
      alert('Successfull Login');
      navigation.navigate('Main')}}>
        <Text style={{fontSize:35,textAlign:'center',textAlignVertical:'center',color:'#FF9100',fontWeight:200}}>
          Login
          </Text>
          </TouchableOpacity>
          <Text style={{width:300,marginLeft:-85,marginTop:100,fontSize:17,fontWeight:300}}>Do not have an account?<Text style={{fontSize:21,fontWeight:500,color:'#FF9100'}} onPress={()=>{navigation.navigate('Signup')}}>Sign Up</Text></Text>
        </Background>
    );
}

export default Login;