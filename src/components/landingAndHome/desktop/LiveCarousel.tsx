import React, { useEffect, useState } from "react";
import { useAuth } from "../../../providers/AuthProvider";
import EventCarousel from "./EventCarousel";
import LandingEventCard from "./LandingEventCard";
import HomeEventCard from "./HomeEventCard";
import { getLiveEvents } from "../../../backendServices";

export default function LiveCarousel({ type = "landing" }) {
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const fetchLiveEvents = async () => {
    try {
      setLoading(true);
      const response = await getLiveEvents(token);
      setPastEvents(response.data);
      console.log("Live >>>>>>>>>>>>>>>", response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveEvents();
  }, []);

  return (
    <EventCarousel
      events={pastEvents}
      isLoading={loading}
      card={(item) =>
        type === "landing" ? (
          <LandingEventCard item={item} />
        ) : (
          <HomeEventCard item={item} />
        )
      }
      cardSkeleton={<p>Loading...</p>}
      hasMore={false}
      onScroll={fetchLiveEvents}
      title="Live and Upcoming Events"
    />
  );
}
