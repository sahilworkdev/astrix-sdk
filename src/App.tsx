import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";
import Tab from "./components/Tab/Tab";

function App() {
  return (
    <>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor={import.meta.env.VITE_ACCENT_COLOR}>
          <Tab activeTabColor="pink" nonActiveTabColor="yellow" />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
