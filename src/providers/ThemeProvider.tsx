import React, { ReactNode } from "react";
import { ThemeContext } from "./types";

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
