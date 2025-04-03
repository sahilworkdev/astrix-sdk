import Arrow from "@/components/general/Arrow";
import LocationIcon from "@/components/general/LocationIcon";
import React, { useEffect, useState } from "react";

const EventTicketDetailSection = ({ styles, values }: any) => {
  const places = values?.events?.map((event: any) => ({
    venue: event.venue,
    location: event.location,
  }));

  const [selectedEvent, setSelectedEvent] = useState(values?.events?.[0] || {});
  const [selectedTicket, setSelectedTicket] = useState(
    selectedEvent?.tickets?.[0] || {}
  );
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);

  const selectEvent = (event: any) => {
    setSelectedEvent(event);
    setShowAllEvents(false);
  };
  const selectTicket = (ticket: any) => {
    setSelectedTicket(ticket);
    setTicketCount(1);
    debugger;
  };

  const addTicketCount = (e: any) => {
    e.stopPropagation();
    debugger;
    if (selectedTicket.maxQty === ticketCount) return;
    else {
      setTicketCount(ticketCount + 1);
    }
  };

  const decreaseTicketCount = (e: any) => {
    e.stopPropagation();
    if (ticketCount === 0) return;
    else {
      setTicketCount(ticketCount - 1);
    }
  };

  useEffect(() => {
    if (values?.events?.length > 0) {
      setSelectedEvent(values.events[0]);
    }
  }, [values?.events]);

  // useEffect(() => {
  //   if (values?.events?.length > 0) {
  //     setSelectedTicket(selectedEvent?.tickets?.[0]);
  //   }
  // }, []);
  debugger;

  return (
    <div>
      <div
        style={{
          backgroundColor: styles.bg,
          padding: "16px",
          borderRadius: "12px",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        {values?.superEventId && (
          <div style={{ marginBottom: "20px" }}>
            {showAllEvents && (
              <h2
                style={{
                  fontSize: styles.headingTextColor,
                  fontWeight: styles.headingTextWeight,
                  color: styles.headingTextColor,
                  marginBottom: "12px",
                  fontFamily: "Mulish",
                }}
              >
                All Venues
              </h2>
            )}

            {
              <div
                style={{
                  backgroundColor: styles.selectedEventBg,
                  padding: "12px 16px 6px 16px",
                  marginBottom: "5px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  border: "1px solid #2c2c2c",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <div>
                    <LocationIcon bgColor="#AF8CFF" width={24} height={24} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: styles.locationTextSize,
                        fontWeight: styles.locationTextWeight,
                        color: styles.locationTextColor,
                        fontFamily: "Mulish",
                      }}
                    >
                      {selectedEvent?.location}
                    </div>
                    <div
                      style={{
                        fontSize: styles.venueTextSize,
                        fontWeight: styles.venueTextWeight,
                        color: styles.venueTextColor,
                        marginBottom: "4px",
                        fontFamily: "Mulish",
                      }}
                    >
                      {selectedEvent?.venue}
                    </div>
                  </div>
                </div>
                <p
                  style={{ cursor: "pointer" }}
                  id={`${showAllEvents ? "up" : "down"}`}
                  onClick={() => setShowAllEvents(!showAllEvents)}
                >
                  <Arrow size="24px" color="white" />
                </p>
              </div>
            }

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              {showAllEvents &&
                values?.events?.map((event: any, index: any) => (
                  <div
                    style={{
                      backgroundColor: styles.ticketContainerBg,
                      padding: "8px 16px 2px 16px",
                      borderRadius: "8px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "start",
                      border: "2px solid #31373F",
                      boxShadow: "0px 4px 10px #00000080",
                      cursor: "pointer",
                    }}
                    key={index}
                    onClick={() => selectEvent(event)}
                  >
                    <div
                      style={{
                        fontSize: styles.locationTextSize,
                        fontWeight: styles.locationTextWeight,
                        color: styles.locationTextColor,
                        fontFamily: "Mulish",
                      }}
                    >
                      {event?.location}
                    </div>
                    <div
                      style={{
                        fontSize: styles.venueTextSize,
                        fontWeight: styles.venueTextWeight,
                        color: styles.venueTextColor,
                        marginBottom: "4px",
                        fontFamily: "Mulish",
                      }}
                    >
                      {event?.venue}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        <div>
          <h2
            style={{
              fontSize: styles.headingTextColor,
              fontWeight: styles.headingTextWeight,
              color: styles.headingTextColor,
              marginBottom: "5px",
              fontFamily: "Mulish",
            }}
          >
            Add Your Ticket
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {selectedEvent &&
              selectedEvent?.tickets?.map((ticket: any, index: any) => (
                <div
                  style={{
                    backgroundColor: styles.ticketContainerBg,
                    padding: "16px",
                    borderRadius: "8px",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-between",
                    alignItems: "start",
                    border: "2px solid #31373F",
                    boxShadow: "0px 4px 10px #00000080",
                    cursor: "pointer",
                  }}
                  onClick={() => selectTicket(ticket)}
                >
                  <div>
                    <div
                      style={{
                        fontSize: styles.ticketNameTextSize,
                        fontWeight: styles.ticketNameTextWeight,
                        color: styles.ticketNameTextColor,
                        marginBottom: "4px",
                        fontFamily: "Mulish",
                      }}
                    >
                      {ticket?.name}
                      <span
                        style={{
                          fontSize: styles.ticketNameTextSize,
                          fontWeight: styles.ticketNameTextWeight,
                          color: styles.ticketNameTextColor,
                          marginLeft: "4px",
                          cursor: "pointer",
                        }}
                      >
                        (Add)
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: styles.ticketDescriptionTextSize,
                        fontWeight: styles.ticketDescriptionTextWeight,
                        color: styles.ticketDescriptionTextColor,
                        fontFamily: "Mulish",
                      }}
                    >
                      {ticket?.description}
                    </div>
                  </div>
                  {selectedTicket.tId === ticket.tId && (
                    <div
                      style={{
                        fontSize: styles.priceTextSize,
                        fontWeight: styles.priceTextWeight,
                        color: styles.priceTextColor,
                        fontFamily: "Mulish",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                          border: "1px solid #AF8CFF",
                          borderRadius: "40px",
                          padding: "0px 8px",
                          cursor: "pointer",
                        }}
                      >
                        <p
                          style={{
                            color: "#FFFFFF",
                            fontSize: "20px",
                            fontWeight: "600",
                            fontFamily: "Mulish",
                          }}
                          onClick={(e) => decreaseTicketCount(e)}
                        >
                          -
                        </p>
                        <p
                          style={{
                            color: "#FFFFFF",
                            fontSize: "20px",
                            fontWeight: "600",
                            fontFamily: "Mulish",
                          }}
                        >
                          {ticketCount}
                        </p>
                        <p
                          style={{
                            color: "#FFFFFF",
                            fontSize: "20px",
                            fontWeight: "600",
                            fontFamily: "Mulish",
                            cursor: "pointer",
                          }}
                          onClick={(e) => addTicketCount(e)}
                        >
                          +
                        </p>
                      </div>
                      <p
                        style={{
                          color: "#AFE67F",
                          fontSize: "24px",
                          fontWeight: "700",
                          fontFamily: "Mulish",
                        }}
                      >
                        ₹{selectedTicket?.price}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTicketDetailSection;
