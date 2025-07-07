import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Background from './Background';
import { UserContext } from './UserContext';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';


function Profile() {
    const { user, email, editProfile } = useContext(UserContext);
    const [image, setImage] = useState("./no-image-icon-23483.png");

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);
    const editor = () => {
        editProfile();
    }


    const callImage = async () => {
        console.log("Image picker is pressed");
        try {
            let _image = await ImagePicker.launchImageLibraryAsync({
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
            }
        } catch (error) {
            console.log("Error during image picking:", error);
        }
        console.log(image);
    };

    return (
        <Background>
            <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(5, 0, 0,0.5)', top: -460 }}>
                <View style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    height: 600,
                    width: 325,
                    borderRadius: 24,
                    alignItems: 'center',
                    alignSelf: 'center',
                    top: 100
                }}>
                    <View style={{
                        backgroundColor: 'black',
                        height: '30%',
                        width: '100%',
                        borderTopEndRadius: 24,
                        borderTopLeftRadius: 24,

                    }} />


                    <View style={{
                        borderRadius: 100,
                        height: 140,
                        width: 140,
                        backgroundColor: 'black',
                        position: 'absolute',
                        top: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: '#FF9100',
                        marginTop: 50
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


                    {image ?
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'black',
                                width: 40,
                                height: 40,
                                borderRadius: 24,
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 20,
                                left: 50,
                                top: 30,
                                borderWidth: 2,
                                borderColor: '#FF9100',
                            }}
                            onPress={callImage}>
                            <MaterialIcons name='add' size={30} color={'#FF9100'} />
                        </TouchableOpacity> : <TouchableOpacity
                            style={{
                                backgroundColor: 'black',
                                width: 150,
                                height: 60,
                                borderRadius: 24,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 200,

                            }}
                            onPress={callImage}>
                            <Text style={{ color: 'white' }}>Add Photo</Text>
                        </TouchableOpacity>}

                    <View style={{ marginTop: 30, alignItems: 'center' }}>
                        <View style={{backgroundColor:'rgba(0,0,0,0.7)',alignItems:'center',paddingVertical:10,paddingHorizontal:30,borderRadius:24,marginTop:30,
                                borderWidth: 2,
                                borderColor: '#FF9100'
                        }}>
                            <Text style={{ fontSize: 55, fontFamily: 'regular', color: '#FF9100' }}>{user}</Text>
                            <Text style={{ fontSize: 20, marginTop: -20, fontFamily: 'regular', color: '#FF9100' }}>{email}</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'black',
                                width: 130,
                                height: 50,
                                borderRadius: 24,
                                justifyContent: 'center',
                                alignItems: 'center',
                                top: 100,
                                borderWidth: 2,
                                borderColor: '#FF9100'
                            }}
                            onPress={editor}>
                            <Text style={{ fontSize: 18, color: '#FF9100', fontFamily: 'regular' }}>
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
