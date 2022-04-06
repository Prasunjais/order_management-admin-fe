import React, { useState, useEffect, useContext, createContext } from "react";
const baseUrl = process.env.REACT_APP_BASE_URL;
interface ContextState {
  user: any;
  signin: any
}
const authContext = createContext({} as ContextState);
export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
}
export const useAuth = () => useContext(authContext);
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signin = (details: any) => {
    setUser(details)
  }
  useEffect(() => {
    //check authentication
  }, []);
  return {
    user,
    signin
  };
}
