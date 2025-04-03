import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./index.css";
import CartHead from "./components/Cart/CartHead";
import EventsDetails from "./components/EventDetails/Desktop/EventsDetails";
import HeadConfirmation from "./components/Confirmaition/HeadConfirmation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TopEventBanner from "./components/landingAndHome/desktop/TopEventBanner";
import TopEventsSlider from "./components/landingAndHome/desktop/TopEventsSlider";
import EventCard from "./components/EventDetails/Desktop/EventCard";
import EventCardSmall from "./components/general/EventCardSmall";
import HeadProfile from "./components/Profile/Desktop/HeadProfile";

function App() {
  return (
    <Provider store={store}>
    <div style={{ background: "black", height: "100vh" }}>
      <AuthProvider token={import.meta.env.VITE_ASTRIX_APP_AUTH_TOKEN}>
        <ThemeProvider accentColor={import.meta.env.VITE_ACCENT_COLOR}>
          {/* <h1 style={{ textAlign: "center" }}>Astrix SDK</h1> */}
          {/* <HeadConfirmation /> */}
          <TopEventsSlider type={""} showArrows={false} />
          <EventsDetails />
          <CartHead />
          {/* <HeadConfirmation /> */}
        
          {/* <EventCardSmall /> */}
          {/* <HeadProfile /> */}
        
        </ThemeProvider>
      </AuthProvider>
    </div>
    </Provider>
  );
}

export default App;
