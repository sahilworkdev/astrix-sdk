// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";
// import axios from "axios";

// interface AuthContextType {
//   isAuthenticated: boolean;
//   userData: Record<string, any> | null;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [userData, setUserData] = useState<Record<string, any> | null>(null);

//   useEffect(() => {
//     const token = import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN;

//     if (token) {
//       axios
//         .get(
//           "https://astrix-events-staging.azurewebsites.net/event/getAll?page=1",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           },
//         )
//         .then((response) => {
//           console.log(response.data);
//           setIsAuthenticated(true);
//           setUserData(response.data);
//         })
//         .catch(() => {
//           setIsAuthenticated(false);
//           setUserData(null);
//         });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, userData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

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
  token: string; // Accept token as a prop
}

export const AuthProvider = ({ children, token }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    if (token) {
      axios
        .get(
          "https://astrix-events-staging.azurewebsites.net/event/getAll?page=1",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response.data);
          setIsAuthenticated(true);
          setUserData(response.data.data);
        })
        .catch(() => {
          setIsAuthenticated(false);
          setUserData(null);
        });
    }
  }, [token]); // Depend on token, so it refetches if token changes

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, token }}>
      {children}
    </AuthContext.Provider>
  );
};
