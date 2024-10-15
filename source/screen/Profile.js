import React, { useContext, useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Background from './Background';
import { UserContext } from './UserContext';
import * as ImagePicker from 'expo-image-picker';



function Profile() {
    const { user, email,editProfile } = useContext(UserContext);
    const [image, setImage] = useState("./no-image-icon-23483.png");

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);
    const editor=()=>{
        editProfile();
    }


    const callImage = async () => {
        console.log("Image picker is pressed");
       try{ let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        //console.log(JSON.stringify(_image));
        console.log(JSON.stringify(_image));
        if (!_image.cancelled) {
            const imageUri = _image.assets[0].uri;  
            console.log("Image URI:", imageUri);  
            setImage(imageUri);
        } else {
            console.log("Image selection was cancelled");
        }}catch (error) {
            console.log("Error during image picking:", error);  
        }
        console.log(image);
    };

    return (
        <Background>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                    height: 600, 
                    width: 325, 
                    borderRadius: 24, 
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: 'black', 
                        height: '30%', 
                        width: '100%', 
                        borderTopEndRadius: 24, 
                        borderTopLeftRadius: 24 ,
                        
                    }} />

                    
                    <View style={{
                        borderRadius: 100, 
                        height: 140, 
                        width: 140, 
                       backgroundColor: 'white', 
                        position: 'absolute', 
                        top: 60, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        zIndex: 1, 
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: 'black',
                        marginTop:50
                    }}>
                        {image ? (
                            <Image
                                source={{ uri: image }}
                                style={{ height: 140, width: 140, borderRadius: 100 }}
                            />
                        ) : (
                            <Text style={{ textAlign: 'center' }}>Add Photo</Text>
                        )}
                    </View>

                   
                    {image?
                    <TouchableOpacity  
                        style={{ 
                            backgroundColor: 'black', 
                            width: 120, 
                            height: 40, 
                            borderRadius: 24, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            marginTop: 90 
                        }} 
                        onPress={callImage}>
                        <Text style={{ color: 'white',fontSize:20,marginTop:-6,position:'absolute'}}>Add Photo</Text>
                    </TouchableOpacity>:<TouchableOpacity  
                        style={{ 
                            backgroundColor: 'black', 
                            width: 150, 
                            height: 60, 
                            borderRadius: 24, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            marginTop: 200 
                        }} 
                        onPress={callImage}>
                        <Text style={{ color: 'white' }}>Add Photo</Text>
                    </TouchableOpacity>}

                    <View style={{ marginTop: 30, alignItems: 'center' }}>
                        <Text style={{ fontSize: 55 }}>{user}</Text>
                        <Text style={{ fontSize: 20, marginTop: 10 }}>{email}</Text>

                        <TouchableOpacity 
                            style={{ 
                                backgroundColor: 'black', 
                                width: 150, 
                                height: 60, 
                                borderRadius: 24, 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                marginTop: 70 
                            }}
                            onPress={editor}>
                            <Text style={{ fontSize: 20, color: 'white' }}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
}

export default Profile;
