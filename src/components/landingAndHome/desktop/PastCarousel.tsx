import React, { useEffect, useState } from "react";
import { getPastEvents } from "../../../backendServices";
import { useAuth } from "../../../providers/AuthProvider";
import EventCarousel from "./EventCarousel";
import LandingEventCard from "./LandingEventCard";
import HomeEventCard from "./HomeEventCard";
export default function PastCarousel() {
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const fecthPastEvents = async () => {
    try {
      setLoading(true);
      const response = await getPastEvents(token);
      setPastEvents(response.data);
      console.log(">>>>>>>>>>>>>>>", response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthPastEvents();
  }, []);
  return (
    <EventCarousel
      events={pastEvents}
      isLoading={loading}
      card={(item) => <LandingEventCard item={item} />}
      // card={(item) => <HomeEventCard item={item} />}
      cardSkeleton={<p>loading,...</p>}
      hasMore={false}
      onScroll={fecthPastEvents}
      title="Past Events"
    />
  );
}
