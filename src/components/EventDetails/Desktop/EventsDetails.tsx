import React from "react";
import EventCard from "./EventCard";
import EventDeailSection from "./EventDeailSection";
import EventTicketDetailSection from "./EventTicketDetailSection";
import BottomBar from "../BottomBar";
import { useSelector } from "react-redux";

const EventsDetails = () => {
  const cardStyles = {
    backgroundColor: "#C8C69300",
    backgroundColorTo:`${"#AF8CFF"}40`,
    imageWidth: "30%",
    imageHeight: "auto",
    aspectRatio: "4/3",  
    profileImageWidth: "40px",
    profileImageHeight: "40px",
    profileBoderColor:"#B0E681",
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
    headingtextColor:"#E8EAED",
    headingtextWeight:"600",
    headingtextSize:"24px",
    ticketContainerBg :"#1F1F1F99",
    ticketNameTextColor:"#E8EAED",
    ticketNameTextSize:"24px",
    ticketNameTextWeight:"600",
    ticketDescriptionTextColor:"##AFB6C0",
    ticketDescriptionTextSize:"16px",
    ticketDescriptionTextWeight:"400",
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

  const event = useSelector((state:any) => state.selectedEvent)
  console.log(event, "selected event")

  return (
    <div style={{ height:"100%", overflow:"auto", backgroundColor:"#0E0F0C",padding:"10px"}}>
      <div>
        <EventCard styles={cardStyles} />
      </div>
      <div style={{ display: "flex" ,marginTop:"20px"}}>
        <div style={{ width: "40%" }}>
          <EventDeailSection styles={sectStyles} />
        </div>
        <div style={{ width: "60%" }}>
          <EventTicketDetailSection styles={ticketsStyles} />
        </div>
      </div>
      <div>
        <BottomBar styles={bottomStyles} />
      </div>
    </div>
  );
};

export default EventsDetails;
