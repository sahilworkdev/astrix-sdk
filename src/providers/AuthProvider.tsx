import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

interface AuthContextType {
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const token = process.env.ASTRIX_APP_AUTH_TOKEN;

    if (token) {
      axios
        .get("https://api.example.com/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setIsAuthenticated(true);
          setUserData(response.data);
        })
        .catch(() => {
          setIsAuthenticated(false);
          setUserData(null);
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
