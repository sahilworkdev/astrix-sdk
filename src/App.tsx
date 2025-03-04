import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider accentColor="#3498db">
          <div className="App">Hello World</div>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
