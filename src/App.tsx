import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";
import TopEventsSlider from "./components/landingAndHome/desktop/TopEventsSlider";
import LiveCarousel from "./components/landingAndHome/desktop/LiveCarousel";
import PastCarousel from "./components/landingAndHome/desktop/PastCarousel";
import Divider from "./components/general/Divider";
import Dropdown from "./components/eventCreation/dropdown";
import Calendar from "./components/eventCreation/calendar";
import { TimeDial } from "./components/eventCreation/clock";
import EventsDetails from "./components/EventDetails/Desktop/EventsDetails";
import CartHead from "./components/Cart/CartHead";

const handleSelect = (option: string) => {
  console.log("Selected:", option);
};
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
            }}
          >
            {/* <EventsDetails /> */}
            <CartHead />
            {/* <TopEventsSlider showArrows={true} type="home" /> */}
            {/* <Divider title="hello" />
            <Dropdown
              options={["Apple", "Banana", "Cherry"]}
              onSelect={handleSelect}
            />
            <Calendar onDateChange={() => {}} selectedDate={new Date()} />
            <TimeDial
              handleTimeClick={() => {}}
              isHourView={true}
              selectedTime={{ hour: 12, minute: 30 }}
            />
            <LiveCarousel />
            <PastCarousel /> */}
          </div>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
