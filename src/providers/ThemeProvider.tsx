import React, { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
  accentColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  accentColor: string;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  accentColor = "#3498db",
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ accentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
