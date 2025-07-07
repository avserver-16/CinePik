import React, { createContext, useState } from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
let count = 1;
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [favMovies, setFavMovies] = useState([]);
  const [iconColor, setIconColor] = useState({});
  const [imageUri, setImage] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setChangeName] = useState('');

  const editProfile = () => {
    console.log("editor pressed");
    console.log(count % 2);
    if (count % 2 == 1) {
      setIsEditing(true);
    }
    else {
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
      [movie.id]: prevColors[movie.id] === '#FF9100' ? 'white' : '#FF9100'
    }));
  };

  return (
    <UserContext.Provider value={{ editProfile, user, setUser, email, setEmail, setFavMovies, favMovies, toggleFavorite, iconColor, imageUri, setImage, imageLibrary }}>
      {children}
      {isEditing && (
        <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.7)', height: 900, width: 400, marginLeft: 0, marginTop: 0 }}>
          <View style={{ position: 'absolute', backgroundColor: 'black', height: 400, width: 328, borderRadius: 20 , borderWidth: 2,alignSelf:'center',
                                borderColor: '#FF9100' ,top:200}}>
            <Text style={{ color: '#FF9100', textAlign: 'center', fontSize: 45, marginTop: 20, fontFamily: "bold" }}>Edit Profile</Text>
            <TextInput style={{
              marginTop: 20,
              marginLeft: 12,
              fontSize: 22, height: 60, width: 300,
              backgroundColor: 'black', // Light transparent background
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#FF9100',
              paddingLeft: 20,
              color: '#FF9100',
              fontFamily: 'regular'
            }}
              placeholder='Change Name'
              placeholderTextColor={'#FF9100'}
              value={user}
              onChangeText={text => {
                setUser(text);
              }}></TextInput>

            <TextInput style={{
              marginTop: 20,
              marginLeft: 12,
              fontSize: 22, height: 60, width: 300,
              backgroundColor: 'black', // Light transparent background
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#FF9100',
              paddingLeft: 20,
              color: '#FF9100',
              fontFamily: 'regular'
            }}
               placeholderTextColor={'#FF9100'}
                placeholder='Change Email'
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}></TextInput>
            <TouchableOpacity style={{ backgroundColor: 'black',
                                width: 150,
                                height: 50,
                                borderRadius: 24,
                                justifyContent: 'center',
                                alignItems: 'center',
                                top: 60,
                                borderWidth: 2,
                                borderColor: '#FF9100' ,
                              alignSelf:'center'}} onPress={editProfile}><Text style={{ fontSize: 20, textAlign: 'center', textAlignVertical: 'center',color:'#FF9100',fontFamily:'regular'}}>Save Changes</Text></TouchableOpacity></View></View>
      )}
    </UserContext.Provider>
  );
};
