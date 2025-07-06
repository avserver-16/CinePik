import React, { useContext, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import Background from './Background';
import { UserContext } from './UserContext';
import { Feather } from "@expo/vector-icons";

function Fav(props) {
    const [iconColor, setIconColor] = useState('white');
    const { favMovies, toggleFavorite } = useContext(UserContext);
    const favPress = (movie) => {
        toggleFavorite(movie);
    };
    return (
        <Background>
            <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(5, 0, 0,0.5)', top: -450 }}>
                <Text
                    style={{
                        fontSize: 45,
                        color: '#FF9100',
                        backgroundColor: 'black',
                        width: '100%',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        height: 150,
                        top: -20,
                        paddingTop: 60,
                        fontFamily: 'bold'
                    }}
                >
                    Your Favorites
                </Text>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: -20, marginBottom: 80 }}>
                    {favMovies && favMovies.length > 0 ? (
                        favMovies.map((movie) =>
                            movie.poster_path && movie.title ? (
                                <View
                                    key={movie.id}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: '#000',
                                        borderRadius: 16,
                                        marginVertical: 8,
                                        marginHorizontal: 16,
                                        height: 100,
                                        width: '95%',
                                        alignSelf: 'center',
                                        paddingHorizontal: 10,
                                    }}
                                >
                                    {/* Movie Poster */}
                                    <Image
                                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                        style={{
                                            height: 60,
                                            width: 40,
                                            borderRadius: 6,
                                            resizeMode: 'cover',
                                        }}
                                    />

                                    {/* Title and Delete */}
                                    <View style={{ flex: 1, marginLeft: 12, flexDirection: 'row', alignItems: 'center' }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                flex: 1,
                                                color: 'white',
                                                fontSize: 14,
                                                fontWeight: '600',
                                            }}
                                        >
                                            {movie.title}
                                        </Text>

                                        <TouchableOpacity onPress={() => favPress(movie)} style={{ paddingHorizontal: 8 }}>
                                            <Feather name="trash" color="red" size={20} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ) : null
                        )
                    ) : (
                        <Text
                            style={{
                                color: 'grey',
                                fontSize: 20,
                                textAlign: 'center',
                                marginTop: 250,
                            }}
                        >
                            No favorites added yet.
                        </Text>
                    )}

                </ScrollView>
            </View>
        </Background>
    );
}

export default Fav;