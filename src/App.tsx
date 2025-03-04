import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import PastEventsWrapper from "./components/PastEventsWrapper";

function App() {
  return (
    <>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor="#3498db">
          <PastEventsWrapper />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
