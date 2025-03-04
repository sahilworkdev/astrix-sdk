import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import PastEventsWrapper from "./components/PastEventsWrapper";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider accentColor="#3498db">
          <PastEventsWrapper />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
