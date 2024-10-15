import React, { useContext,useState } from 'react';
import {View, ImageBackground,TouchableOpacity,Text,ScrollView,Image} from 'react-native';
import Background from './Background'; 
import { UserContext } from './UserContext';
import { Feather } from "@expo/vector-icons";

function Fav(props) {
    const [iconColor,setIconColor]=useState('white');
    const {favMovies,toggleFavorite}=useContext(UserContext);
    const favPress = (movie) => {
        toggleFavorite(movie);
    };
    return (
        <Background>
        <View style={{height:'200%',width:'430%',backgroundColor:'rgba(5, 0, 0,0.5)',marginLeft:-150}}>
        <Text 
                    style={{
                        fontSize: 45,
                        marginTop: 55,
                        paddingTop: 105,
                        marginLeft: -55,
                        height: 135,
                        color: '#FF9100',
                        backgroundColor: 'black',
                        width: 500,
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        height:200
                    }}
                >
                    Your Favorites
                </Text>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 0, marginBottom: 190 }}>
                    {favMovies && favMovies.length > 0 ? (
                        favMovies.map((movie) => (
                            movie.poster_path && movie.title ? (
                                <View 
                                    key={movie.id} 
                                    style={{ 
                                        borderRadius: 24, 
                                        marginTop: 10, 
                                        marginBottom: 20, 
                                        alignItems: 'center', 
                                        flexDirection: 'row', 
                                        backgroundColor: 'black', 
                                        padding: 20, 
                                        width: 350, 
                                        marginLeft: 20 
                                    }}
                                >
                                    <Image
                                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                        style={{
                                            height: 250,
                                            width: 150,
                                            borderRadius: 20
                                        }}
                                    />
                                    <Text 
                                        style={{ 
                                            fontSize: 20, 
                                            color: 'white', 
                                            marginTop: 10, 
                                            textAlign: 'center',
                                            width: 150,
                                            marginLeft: 20 
                                        }}
                                    >
                                        {movie.title}
                                    </Text>
                                    <TouchableOpacity onPress={() => favPress(movie)} style={{ marginLeft:-40,marginTop:225 }} >
                        <Feather 
                        name='trash' 
                        style={{fontWeight:900}}
                        color={'white'}
                        size={24} 
                        ></Feather></TouchableOpacity>
                                </View>
                            ) : null
                        ))
                    ) : (
                        <Text style={{ color: 'grey', fontSize: 28, textAlign: 'center', marginTop: 250 }}>
                            No favorites added yet.
                        </Text>
                    )}
                </ScrollView>

            </View>
  

</Background>
    );
}

export default Fav;