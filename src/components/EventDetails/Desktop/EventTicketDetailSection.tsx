import React from "react";

const EventTicketDetailSection = ({styles, values}:any) => {
  return (
    <div>
      <div
        style={{
          backgroundColor:styles.bg,
          padding: "16px",
          borderRadius: "12px",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2
          style={{
            fontSize: styles.headingTextColor,
            fontWeight: styles.headingTextWeight,
            color:styles.headingTextColor,
            marginBottom: "12px",
            fontFamily:"Mulish"
          }}
        >
          Add Your Ticket
        </h2>
        <div
          style={{
            backgroundColor: styles.ticketContainerBg,
            padding: "16px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            border: "1px solid #2c2c2c",
          }}
        >
          <div>
            <div
              style={{
                fontSize: styles.ticketNameTextSize,
                fontWeight: styles.ticketNameTextWeight,
                color:styles.ticketNameTextColor,
                marginBottom: "4px",
                fontFamily:"Mulish"
              }}
            >
              rktjhret hiu{" "}
              <span
                style={{
                  fontSize: styles.ticketNameTextSize,
                  fontWeight: styles.ticketNameTextWeight,
                  color:styles.ticketNameTextColor,
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
                color:styles.ticketDescriptionTextColor,
                fontFamily:"Mulish"
              }}
            >
              kjghre iugreyjur
            </div>
          </div>
          <div
            style={{
              fontSize: styles.priceTextSize,
              fontWeight: styles.priceTextWeight,
              color:styles.priceTextColor,
              fontFamily:"Mulish",
              display:"flex",
              flexDirection: "column",
              gap:"10px"
            }}
          >
            <div style={{display:"flex", gap:"5px", alignItems:"center", border:"1px solid #AF8CFF", borderRadius:"40px", padding:"0px 8px"}}>
              <p style={{color:"#FFFFFF", fontSize:"20px", fontWeight:"600", fontFamily:"Mulish"}}>-</p>
              <p style={{color:"#FFFFFF", fontSize:"20px", fontWeight:"600", fontFamily:"Mulish"}}>1</p>
              <p style={{color:"#FFFFFF", fontSize:"20px", fontWeight:"600", fontFamily:"Mulish"}}>+</p>
            </div>
            <p style={{color:"#AFE67F", fontSize:"24px", fontWeight:"700", fontFamily:"Mulish"}}>₹342</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTicketDetailSection;
