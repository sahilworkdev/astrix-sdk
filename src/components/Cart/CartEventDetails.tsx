import React from "react";
import LocationIcon from "../general/LocationIcon";
import CalendarIcon from "../general/CalendarIcon";

const CartEventDetails = ({ styles, selectedEvent, selectedTicket }: any) => {
  return (
    <div>
      <div>
        {/* Event Title */}
        <h2
          style={{
            color: styles.eventNameTextColor,
            fontWeight: styles.eventNameTextWeight,
            fontSize: styles.eventNameTextSize,
            marginBottom: "4px",
          }}
        >
          {selectedEvent?.name}
        </h2>
        <p
          style={{
            color: styles.eventDescriptionColor,
            fontWeight: styles.eventDescriptionWeight,
            fontSize: styles.eventDescriptionSize,
            marginBottom: "16px",
          }}
        >
          {selectedEvent?.user?.username}
        </p>

        {/* Phase and Ticket Info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 0px",
            borderBottom: "1px solid #31373F",
            borderTop: "1px solid #31373F",
            marginBottom: "16px",
          }}
        >
          <div>
            <strong
              style={{
                color: styles.ticketNameTextColor,
                fontWeight: styles.ticketNameTextWeight,
                fontSize: styles.ticketNameTextSize,
              }}
            >
              {selectedTicket?.name}
            </strong>
            <p
              style={{
                color: styles.ticketDescriptionColor,
                fontWeight: styles.ticketDescriptionWeight,
                fontSize: styles.ticketDescriptionSize,
              }}
            >
            {selectedTicket?.description}
            </p>
          </div>
          <div>
            <span
              style={{
                color: styles.tickeCountAndPriceColor,
                fontSize: styles.tickeCountAndPriceSize,
                fontWeight: styles.tickeCountAndPriceWeight,
              }}
            >
              {selectedTicket?.qty}
            </span>
          </div>
          <div>
            <span
              style={{
                color: styles.tickeCountAndPriceColor,
                fontSize: styles.tickeCountAndPriceSize,
                fontWeight: styles.tickeCountAndPriceWeight,
              }}
            >
              {selectedTicket?.price}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "75%",
            paddingBottom: "20px",
          }}
        >
          {/* Location */}
          <div
            style={{
              color: styles.valuesColor,
              fontSize: styles.valuesSize,
              fontWeight: styles.valuesWeight,
              display: "flex",
            }}
          >
            <p style={{ marginRight: "8px" }}>
              <LocationIcon />
            </p>
            <p>{selectedEvent?.venue}</p>
            <p>{selectedEvent?.location}</p>
          </div>

          {/* Date and Time */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              color: "#bbb",
            }}
          >
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "6px" }}>
                <CalendarIcon bgColor="#AF8CFF" />
              </p>
              <div>
                {" "}
                <p
                  style={{
                    color: styles.detailHeaderColor,
                    fontSize: styles.detailHeaderSize,
                    fontWeight: styles.detailHeaderWeight,
                  }}
                >
                  Starting on
                </p>
                <p
                  style={{
                    color: styles.valuesColor,
                    fontSize: styles.valuesSize,
                    fontWeight: styles.valuesWeight,
                  }}
                >
                  {selectedEvent?.startDate}
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "6px" }}>
                <CalendarIcon bgColor="#AF8CFF" />
              </p>
              <div>
                <p
                  style={{
                    color: styles.detailHeaderColor,
                    fontSize: styles.detailHeaderSize,
                    fontWeight: styles.detailHeaderWeight,
                  }}
                >
                  Closing on
                </p>
                <p
                  style={{
                    color: styles.valuesColor,
                    fontSize: styles.valuesSize,
                    fontWeight: styles.valuesWeight,
                  }}
                >
                  {selectedEvent?.endDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEventDetails;
