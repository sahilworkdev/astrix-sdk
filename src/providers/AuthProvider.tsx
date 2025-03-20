import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import { USER_API_URI } from "../config";

interface AuthContextType {
  token: string;
  isAuthenticated: boolean;
  userData: Record<string, any> | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
  token: string;
}

export const AuthProvider = ({ children, token }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    if (token) {
      axios
        .get(USER_API_URI, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          setIsAuthenticated(true);
          setUserData(response.data);
        })
        .catch(() => {
          setIsAuthenticated(false);
          setUserData(null);
        });
    }
  }, [token]);

  console.log("USER DATA>>>>>>", userData);
  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, token }}>
      {children}
    </AuthContext.Provider>
  );
};
