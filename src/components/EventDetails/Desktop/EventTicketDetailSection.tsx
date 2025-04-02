import React from "react";

const EventTicketDetailSection = ({styles}:any) => {
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
            fontSize: styles.headingtextColor,
            fontWeight: styles.headingTextWeight,
            color:styles.headingTextColor,
            marginBottom: "12px",
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
            alignItems: "center",
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
            }}
          >
            ₹342
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTicketDetailSection;
