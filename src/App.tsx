import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";
import TopEventsSlider from "./components/landingAndHome/desktop/TopEventsSlider";
import Tag from "./components/general/Tag";
import Survey from "./components/SurveyQuestion/Survey";
import CartEventDetails from "./components/Cart/CartEventDetails";
import CartHead from "./components/Cart/CartHead";
function App() {
  return (
    <div style={{ background: "black", height: "100vh" }}>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor={import.meta.env.VITE_ACCENT_COLOR}>
          {/* <h1 style={{ textAlign: "center" }}>Astrix</h1> */}
          {/* <TopEventsSlider showArrows={true} type="desktop" />
          <Tag label="tag tag" style={{ width: "80px" }} /> */}

          {/* <Survey /> */}
          <CartHead />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
