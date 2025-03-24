import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";

function App() {
  return (
    <div style={{ background: "black", height: "100vh" }}>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor={import.meta.env.VITE_ACCENT_COLOR}>
          <h1 style={{ textAlign: "center" }}>Astrix SDK</h1>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
