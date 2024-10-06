import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [email,setEmail]=useState('');
  const [favMovies,setFavMovies]=useState([]);
  const [iconColor,setIconColor]=useState({});


  const toggleFavorite = (movie) => {
    setFavMovies((prevFavMovies) => {
        // Ensure prevFavMovies is always an array
        if (!Array.isArray(prevFavMovies)) {
            prevFavMovies = [];
        }

        // Check if the movie is already a favorite
        if (prevFavMovies.some(favMovie => favMovie.id === movie.id)) {
            // If the movie is already in favorites, remove it
            return prevFavMovies.filter(favMovie => favMovie.id !== movie.id);
        } else {
            // Otherwise, add it to the favorites
            return [...prevFavMovies, movie];
        }
        
    });
    setIconColor((prevColors) => ({
      ...prevColors,
      [movie.id]:prevColors[movie.id] === '#FF9100' ? 'white' : '#FF9100'
  }));
};

  return (
    <UserContext.Provider value={{ user, setUser,email,setEmail,setFavMovies,favMovies ,toggleFavorite}}>
      {children}
    </UserContext.Provider>
  );
};
