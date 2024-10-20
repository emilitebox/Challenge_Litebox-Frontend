import { createContext, useState, useEffect } from "react";

export const AuthContextMemorySpace = createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [mainLoader, setMainLoader] = useState(true);

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    setTimeout(() => {
      setMainLoader(false);
    }, 1200);

    return () => {
      //Unmount
    };
  }, []);

  return (
    <AuthContextMemorySpace.Provider
      value={{
        user,
        setUser,
        mainLoader,
        setMainLoader,
        logout,
      }}
    >
      {children}
    </AuthContextMemorySpace.Provider>
  );
};
