import { createContext, useContext, useState } from "react";
import { AuthService } from "@src/service/AuthService";

const authContext = createContext();

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user ?? null);
    setError(error ?? "");
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const value = { user, error, loginWithGoogle, logout, setUser };

  return <authContext.Provider value={value} {...props} />;
};
