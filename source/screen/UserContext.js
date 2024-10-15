import React, { createContext, useState } from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import {View,TextInput,Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
let count=1;
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [email,setEmail]=useState('');
  const [favMovies,setFavMovies]=useState([]);
  const [iconColor,setIconColor]=useState({});
  const [imageUri,setImage]=useState();
  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setChangeName] = useState('');

  const editProfile = () => {
    console.log("editor pressed");
    console.log(count%2);
    if(count%2==1){
    setIsEditing(true);}
    else{
      setIsEditing(false);
    }  
    count++;
  };

  const imageLibrary = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImage(uri);  
      }
    });
  
  

  }


  const toggleFavorite = (movie) => {
    setFavMovies((prevFavMovies) => {
        if (!Array.isArray(prevFavMovies)) {
            prevFavMovies = [];
        }
        if (prevFavMovies.some(favMovie => favMovie.id === movie.id)) {
           return prevFavMovies.filter(favMovie => favMovie.id !== movie.id);
        } else {
            return [...prevFavMovies, movie];
        }
        
    });
    setIconColor((prevColors) => ({
      ...prevColors,
      [movie.id]:prevColors[movie.id] === '#FF9100' ? 'white' : '#FF9100'
  }));
};

  return (
    <UserContext.Provider value={{ editProfile,user, setUser,email,setEmail,setFavMovies,favMovies ,toggleFavorite,iconColor,imageUri,setImage,imageLibrary}}>
      {children}
      {isEditing && (
        <View style={{position:'absolute',backgroundColor: 'rgba(255, 255, 255, 0.3)',height:900,width:400,marginLeft:0,marginTop:0}}>
        <View style={{position:'absolute',backgroundColor:'black',height:600,width:328,marginLeft:31,marginTop:127,borderRadius:20}}>
          <Text style={{color:'white',textAlign:'center',fontSize:40,marginTop:20}}>Edit Profile</Text><TextInput style={{
            marginTop:80,
            marginLeft:12,
            fontSize:22,height:80,width:300,
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Light transparent background
            borderRadius: 20,
            borderWidth: 0,
            borderColor: 'rgba(255, 255, 255, 0.5)',    // Border mimicking frosted glass
            shadowColor: '#fff',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
      paddingLeft:20}} placeholder='Change Name...?'
      value={user}
          onChangeText={text => {
            setUser(text);}}></TextInput>
      
      <TextInput style={{
        marginTop:100,
        marginLeft:12,
            fontSize:22,height:80,width:300,
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Light transparent background
            borderRadius: 20,
            borderWidth: 0,
            borderColor: 'rgba(255, 255, 255, 0.5)',    // Border mimicking frosted glass
            shadowColor: '#fff',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
      paddingLeft:20}} placeholder='Change Mail Id...?'
      value={email}
          onChangeText={text => {
            setEmail(text);}}></TextInput>
      <TouchableOpacity style={{backgroundColor:'white',width:140,height:60,marginLeft:90,marginTop:70,borderRadius:24}} onPress={editProfile}><Text style={{fontSize:20,textAlign:'center',textAlignVertical:'center',marginTop:15}}>Save Changes</Text></TouchableOpacity></View></View>
    )}
    </UserContext.Provider>
  );
};
