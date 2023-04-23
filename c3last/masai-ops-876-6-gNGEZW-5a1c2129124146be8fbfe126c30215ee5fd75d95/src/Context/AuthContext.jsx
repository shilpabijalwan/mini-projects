import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });

  const userLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
  };

  const userLogout = (token) => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };
  return (
    <AuthContext.Provider value={{ state, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
