import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import EventDeailSection from "./EventDeailSection";
import EventTicketDetailSection from "./EventTicketDetailSection";
import BottomBar from "../BottomBar";
import { useSelector } from "react-redux";
import { setSelectedEvent } from "@/redux/reducers/selectedEventSlice";

const EventsDetails = () => {
  const cardStyles = {
    fontFamily:"mulish",
    backgroundColor: "#C8C69300",
    backgroundColorTo:`${"#AF8CFF"}40`,
    imageWidth: "40%",
    imageHeight: "auto",
    aspectRatio: "4/2",  
    profileImageWidth: "40px",
    profileImageHeight: "40px",
    profileBoderColor:"#AF8CFF",
    userNameTextColor: "#CCD0D7",
    userNameTextSize: "28px",
    userNameTextWeight: "400",
    descriptionTextColor: "#E8EAED",
    descriptionTextSize: "40px",
    desctriptionTextWeight: "600",
    tagTextColor: "#FFFFFF",
    tagTextSize: "12px",
    tagTextWeight: "400",
    detailTextColor: "#CCD0D7",
    detailTextSize: "16px",
    detailTextWeight: "400",
    detailHeadingTextColor: "#939CAA",
    detailHeadingTextSize: "16px",
    detailHeadingTextWeight: "400",
  };

  const sectStyles = {
    headingTextColor: "#E8EAED",
    headingTextSize: "24px",
    headingTextWeight: "600",
    detailTextColor: "#AFB6C0",
    detailTextSize: "14px",
    detailTextWeight: "400",
    artistProfileImageWidth:"40px",
    artistProfileImagHeight:"40px",
    artistNameTextColor:"#E8EAED",
    artistNameTextSize:"14px",
    artistNameTextWeight:"600",
    socialMediaIconWidth:"20px",
    socialMediaIconHeight:"20px",
  };
  
  const ticketsStyles = {
    bg:"#FFFFFF1A",
    headingTextColor:"#E8EAED",
    headingTextWeight:"600",
    headingTextSize:"24px",
    headingTextFamily:"Mulish",
    ticketContainerBg :"#1F1F1F99",
    selectedEventBg:"#1F1F1F99",
    ticketNameTextColor:"#E8EAED",
    ticketNameTextSize:"24px",
    ticketNameTextWeight:"600",
    ticketDescriptionTextColor:"#AFB6C0",
    ticketDescriptionTextSize:"16px",
    ticketDescriptionTextWeight:"400",
    locationTextColor:"#CCD0D7",
    locationTextSize:"16px",
    locationTextWeight:"400",
    venueTextColor:"#CCD0D7",
    venueTextSize:"20px",
    venueTextWeight:"600",
    priceTextSize:"24px",
    priceTextColor:"#AFE67F",
    priceTextWeight:"700",
    addCountTextColor:"blue",
    addCountTextSize:"40px",
    addCountTextWeight:"600"
  }

  const bottomStyles = {
    bg:"#0E0F0C",
    priceTextSize:"28px",
    priceTextColor:"#AFE67F",
    priceTextWeight:"700",
    countsTextSize:"14px",
    countsTextColor:"#939CAA",
    countsTextWeight:"400",
    btnTextSize:"24px",
    btnTextColor:"#000000",
    btnTextWeight:"600",
    btnBg:"#AFE67F",
    btnRadius:"20px"
  }

  const eventDetail = useSelector((state:any) => state.selectedEventDetail.selectedEventDetail)
 
    const [selectedEvent, setSelectedEvent] = useState(eventDetail?.events?.[0] || {});
    const [selectedTicket, setSelectedTicket] = useState(selectedEvent?.tickets?.[0] || {});
    const [showAllEvents, setShowAllEvents] = useState(false);
    const [ticketCount, setTicketCount] = useState(0)

    const need = {
      selectedEvent: selectedEvent,
      selectedTicket: selectedTicket,
      showAllEvents: showAllEvents,
      ticketCount: ticketCount,
      setTicketCount: setTicketCount,
      setShowAllEvents: setShowAllEvents,
      setSelectedEvent: setSelectedEvent,
      setSelectedTicket: setSelectedTicket,
    }

  return (
    <div style={{position:"relative", backgroundColor:"#0E0F0C", backdropFilter: 'blur(8px)',height:"100%", overflow:"auto"}}>
      <div style={{ height:"100%", overflow:"auto", }}>
      <div>
        <EventCard styles={cardStyles} values={eventDetail} />
      </div>
      <div style={{ display: "flex" ,marginTop:"20px"}}>
        <div style={{ width: "40%" }}>
          <EventDeailSection styles={sectStyles}  values={eventDetail} />
        </div>
        <div style={{ width: "60%" }}>
          <EventTicketDetailSection styles={ticketsStyles}  values={eventDetail} />
        </div>
      </div>
      </div>
      <div style={{position:"absolute", bottom:"0px", left:"0px", width:"100%", border:"2px solid #31373F66", borderRadius:"12px"}}>
        <BottomBar styles={bottomStyles} />
      </div>
    </div>
  );
};

export default EventsDetails;
