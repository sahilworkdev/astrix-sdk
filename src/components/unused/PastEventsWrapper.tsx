import React from "react";
import { useAuth } from "../providers/AuthProvider";
import EventCard from "./eventCard/EventCard";

export default function PastEventsWrapper() {
  const { isAuthenticated, userData } = useAuth();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Past Events</h1>
      {isAuthenticated &&
        Array.isArray(userData) &&
        userData.map((event: any) => (
          <div style={{ maxWidth: "400px" }}>
            <EventCard key={event.id} item={event} />
          </div>
        ))}
    </div>
  );
}
