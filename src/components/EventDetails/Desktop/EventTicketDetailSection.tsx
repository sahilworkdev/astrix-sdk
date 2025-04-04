import Arrow from "@/components/general/Arrow";
import LocationIcon from "@/components/general/LocationIcon";
import React from "react";

const EventTicketDetailSection = ({ styles }: any) => {
  return (
    <div
      style={{
        backgroundColor: styles.bg,
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #EEEDED10",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div style={{}}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            backgroundColor: "#1F1F1F99",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #31373F66",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <LocationIcon bgColor="#AF8CFF" width={24} height={24} />
            </div>
            <div>
              <p
                style={{
                  fontSize: styles.ticketDescriptionTextSize,
                  fontWeight: styles.ticketDescriptionTextWeight,
                  color: styles.ticketDescriptionTextColor,
                  fontFamily: "Mulish",
                }}
              >
                Locarion
              </p>
              <p
                style={{
                  fontSize: styles.ticketNameTextSize,
                  fontWeight: styles.ticketNameTextWeight,
                  color: styles.ticketNameTextColor,
                  marginBottom: "4px",
                  fontFamily: "Mulish",
                }}
              >
                Delhu
              </p>
            </div>
          </div>
          <div>
            <p>
              {"<"}
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#1F1F1F99", borderRadius: "12px" }}
        ></div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <p
          style={{
            color: styles.headingTextColor,
            fontSize: "24px",
            fontWeight: styles.headingTextWeight,
            marginBottom: "12px",
            fontFamily: "Mulish",
          }}
        >
          Add Your Ticket
        </p>
        <div
          style={{
            backgroundColor: styles.ticketContainerBg,
            padding: "16px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            border: "2px solid #31373F",
          }}
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
              rktjhret hiu{" "}
              <span
                style={{
                  fontSize: styles.ticketNameTextSize,
                  fontWeight: styles.ticketNameTextWeight,
                  color: styles.ticketNameTextColor,
                  marginLeft: "4px",
                  cursor: "pointer",
                  fontFamily: "Mulish",
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
              kjghre iugreyjur
            </div>
          </div>
          <div
            style={{
              fontSize: styles.priceTextSize,
              fontWeight: styles.priceTextWeight,
              color: styles.priceTextColor,
              fontFamily: "Mulish",
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
