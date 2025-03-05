import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";

function App() {
  return (
    <>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor="#3498db">Hello Astrix</ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
