import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";
import TopEventsSlider from "./components/landingAndHome/desktop/TopEventsSlider";
import LiveCarousel from "./components/landingAndHome/desktop/LiveCarousel";
import PastCarousel from "./components/landingAndHome/desktop/PastCarousel";

function App() {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor={import.meta.env.VITE_ACCENT_COLOR}>
          {/* <h1 style={{ textAlign: "center" }}>Astrix SDK</h1> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              padding: "20px",
            }}
          >
            <TopEventsSlider showArrows={true} type="home" />
            <LiveCarousel />
            <PastCarousel />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
