import React from "react";
import Details from "./Details";

const Ticket: React.FC = () => {
  const detailStyles = {
    bgColor: "#1F1F1F",
    ticketNameTextColor: "#CCD0D7",
    ticketNameTextSize: "20px",
    ticketNameTextWeight: "700",
    detailHeaderTextColor: "#CCD0D7",
    detailHeaderTextSize: "16px",
    detailHeaderTextWeight: "400",
    detailValueTextColor: "#CCD0D7",
    detailValueTextSize: "16px",
    detailValueTextWeight: "400",
    priceTextColor: "#AF8CFF",
    priceTextSize: "14px",
    priceTextWeight: "500",
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* Left side - Image */}
      <div style={{ backgroundColor: "#1F1F1F", display:"flex", justifyContent:"center", alignItems:"center", borderLeft:"12px", padding:"10px" }}>
        <img
          src="/vite.svg"
          alt="Concert"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      {/* Right side - Content */}
      <div>
        <Details styles={detailStyles} />
      </div>
      <div style={{ backgroundColor: "#1F1F1F", display:"flex", justifyContent:"center", alignItems:"center", borderRight:"12px", padding:"10px" }}>
        <img
          src="/vite.svg"
          alt="Concert"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default Ticket;
