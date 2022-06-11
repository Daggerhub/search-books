import { useContext, createContext, useEffect, useState } from 'react';
import { Auth } from "aws-amplify";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => Auth.federatedSignIn({ provider: "Google"})

  const logOut = () => {
    Auth.signOut();
    setUser(null);
  }

  useEffect(() => {
    const checkUser = async() => {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
    }
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};