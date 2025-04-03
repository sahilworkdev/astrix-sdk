import React from "react";
import LocationIcon from "../general/LocationIcon";
import CalendarIcon from "../general/CalendarIcon";

const CartEventDetails = ({ values, styles }: any) => {
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
          {values?.name}
        </h2>
        <p
          style={{
            color: styles.eventDescriptionColor,
            fontWeight: styles.eventDescriptionWeight,
            fontSize: styles.eventDescriptionSize,
            marginBottom: "16px",
          }}
        >
          {values?.user?.username}
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
              Phase 2
            </strong>
            <p
              style={{
                color: styles.ticketDescriptionColor,
                fontWeight: styles.ticketDescriptionWeight,
                fontSize: styles.ticketDescriptionSize,
              }}
            >
              Description of ticket by Hot Sauce is an hip-hop music event
              featuring an
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
              x 2
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
              ₹1999
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
            <p>{values?.venue}</p>
            <p>{values?.location}</p>
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
                  {values?.startDate}
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
                  {values?.endDate}
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
