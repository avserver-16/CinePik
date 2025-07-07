import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Feather } from "@expo/vector-icons";
import Background from './Background';
import { TouchableOpacity } from 'react-native';
import { UserContext } from './UserContext';

function Main() {
    const [movieList, setMovielist] = useState([]);
    const { favMovies, toggleFavorite, iconColor } = useContext(UserContext);

    const getmovieurl = async () => {

        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=e3894156f041a0031087bec3a769ec9a');
        const json = await res.json();
        try {

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }


            console.log('API Response:', json);
            console.log('Response:', res);

            if (json && json.results) {
                setMovielist(json.results);
            } else {
                console.error('No movie results found in the API response.');
            }
        } catch (error) {
            console.error('Error fetching movies:', error.message || error);
        }
    };

    useEffect(() => {
        getmovieurl();
    }, []);

    const favPress = (movie) => {
        toggleFavorite(movie);

    };

    return (
        <Background>
            <View style={{ height: '105%', width: '100%', backgroundColor: 'rgba(5, 0, 0,0.5)', top: -450, }}>
                <Text
                    style={{
                        fontSize: 45,
                        marginTop: 10,
                        paddingTop: 40,
                        marginLeft: -55,
                        height: 135,
                        color: '#FF9100',
                        backgroundColor: 'black',
                        width: 500,
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        fontFamily: 'bold'
                    }}>
                    CinePik Picks
                </Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 0, marginBottom: 100 }}
                >
                    {movieList.map((movie) => (
                        movie.poster_path && movie.title ? (
                            <View
                                key={movie.id}
                                style={{
                                    borderRadius: 24,
                                    marginTop: 10,
                                    marginBottom: 20,
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
                                <View style={{ marginLeft: 20, flex: 1 }}>
                                    <Text style={{ fontSize: 24, color: '#FF9100',fontFamily:'bold'}} numberOfLines={1}>
                                        {movie.title}
                                    </Text>
                                    <Text style={{ fontSize: 14, color: 'white', marginTop: 5 ,fontFamily:'xlight'}} numberOfLines={3}>
                                        {movie.overview}
                                    </Text>
                                    <Text style={{ fontSize: 14, color: 'gray', marginTop: 5,fontFamily:'xlight' }}>
                                        Release: {movie.release_date}
                                    </Text>
                                    <Text style={{ fontSize: 16, color: '#FFD700', top:60,fontFamily:'xlight'}}>
                                        ⭐ {movie.vote_average.toFixed(1)} / 10
                                    </Text>
                                    <TouchableOpacity onPress={() => favPress(movie)} style={{ marginLeft:110,top:35 }}>
                                        <Feather
                                            name='heart'
                                            color={iconColor[movie.id] || 'white'}
                                            size={24}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        ) : null
                    ))}
                </ScrollView>
            </View>
        </Background>
    );
}

export default Main;
