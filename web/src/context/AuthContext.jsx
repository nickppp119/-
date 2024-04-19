import { createContext, useState, useContext } from 'react';

 
const AuthContext = createContext({
  userState: {
    value: {
      name: null,
      role: null,
      token: null
    },
    setValue: () => { }
  },
  handleLogout: () => { }
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: null,
    role: null,
    token: null
  });

  const handleLogout = () => {
    setUser({
      name: null,
      role: null,
      token: null
    });
  };

  return (
    <AuthContext.Provider value={{
      userState: {
        value: user,
        setValue: setUser
      },
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);