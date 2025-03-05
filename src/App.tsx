import React, { useState } from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";
import Tab from "./components/Tab/Tab";
import Button from "./components/Button/Button";
import Card from "./components/unused/Card";
import PastCarousel from "./components/landingAndHome/desktop/PastCarousel";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor="#3498db">
          {/* <Tab
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            fontFamily="Poppins"
            textSize={14}
            activeTabColor="black"
          />
          <Button label="Get Started" style={{backgroundColor:"red", color:"green"}}/> */}
          {/* <PastCarousel /> */}
          <div style={{ height: "400px", width: "380px" }}>
            <Card />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
