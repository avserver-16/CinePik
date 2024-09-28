import React, { createContext, useState } from 'react';

export const user = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Guest', profilePic: null });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
