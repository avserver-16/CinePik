import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Feather } from "@expo/vector-icons";
import Background from './Background'; 
import { TouchableOpacity } from 'react-native';


function Main() {
    const [movieList, setMovielist] = useState([]);
    const [iconColor,setIconColor]=useState('white');
    
    
    const getmovieurl = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=ca44157f877dc4356b6d4304b0287d85')
            .then(res => res.json())
            .then(json => setMovielist(json.results))
            .catch(error => console.error('Error fetching movies:', error));
    };

    useEffect(() => {
        getmovieurl();
    }, []);


    const favPress=(movieId)=>{
        setIconColor((prevColors) => ({
            ...prevColors,
            [movieId]: prevColors[movieId] === '#FF9100' ? 'white' : '#FF9100'  // Toggle color for the specific movie
        }));
        
    }

    return (
        <Background >
            <View style={{ height: '160%', width: '430%', backgroundColor: 'rgba(5, 0, 0,0.5)',marginTop:0,marginLeft:-150}}>
        <Text 
        style={{
            fontSize:45,
        marginTop:10,
        paddingTop:40,
        marginLeft:-55,
        height:135,
        color:'#FF9100',
        backgroundColor:'black',
        width:500,
        textAlign:'center',
        verticalAlign:'middle'}}>
            CinePik Picks</Text>
        <ScrollView 
            vertical={true} 
            showsVerticalScrollIndicator={false} 
            style={{ marginTop:0 ,marginBottom:70}}
            
        >
            {movieList.map((movie) => (
                movie.poster_path && movie.title ? (
                    <View key={movie.id} 
                    style=
                    {{ 
                    
                        borderRadius:24,
                    marginTop:10,
                    marginBottom: 20, 
                    alignItems: 'center',flexDirection:'row',backgroundColor:'black',padding:20,width:350,marginLeft:20 }}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                            style={{
                                height: 250,
                                width: 150,
                                borderRadius: 20
                            }}
                        />
                        <Text style={{ fontSize: 20, color: 'white', marginTop: 10, textAlign: 'center',width:150,marginLeft:20 }}>
                            {movie.title}
                        </Text>
                        <TouchableOpacity onPress={()=>favPress(movie.id)} style={{ marginLeft:-40,marginTop:225 }} >
                        <Feather 
                        name='heart' 
                        style={{fontWeight:900}}
                        color={iconColor[movie.id]||'white'}
                        size={24} 
                        ></Feather></TouchableOpacity>
                        
                    </View>
                ) : null
            ))}
        </ScrollView>

            </View>
        </Background>
    );
}

export default Main;