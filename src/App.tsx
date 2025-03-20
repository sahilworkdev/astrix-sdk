import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";
import TopEventsSlider from "./components/landingAndHome/desktop/TopEventsSlider";
import EventCard from "./components/EventDetails/Desktop/EventCard";
import EventsDetails from "./components/EventDetails/Desktop/EventsDetails";
import Survey from "./components/SurveyQuestion/Survey";
function App() {
  return (
    <div style={{ background: "black", height: "100vh" }}>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor={import.meta.env.VITE_ACCENT_COLOR}>
          {/* <h1 style={{ textAlign: "center" }}>Astrix</h1> */}
          {/* <TopEventsSlider showArrows={true} type="desktop" /> */}
          {/* <EventsDetails /> */}
          <Survey />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
