import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
  });

  const updateUser = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
