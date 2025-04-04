import React from "react";
import LocationIcon from "../general/LocationIcon";

const CartEventDetails = ({ styles }: any) => {
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
          Junkie Event the blast
        </h2>
        <p
          style={{
            color: styles.eventDescriptionColor,
            fontWeight: styles.eventDescriptionWeight,
            fontSize: styles.eventDescriptionSize,
            marginBottom: "16px",
          }}
        >
          By Hot Sauce
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
            paddingBottom:"20px"
          }}
        >
          {/* Location */}
          <div
            style={{
              color: styles.valuesColor,
              fontSize: styles.valuesSize,
              fontWeight: styles.valuesWeight,
              display:"flex"
            }}
          >
            <p style={{ marginRight: "8px" }}><LocationIcon bgColor="white" width={24} height={24} /></p>
            <p>2nd Floor, JLN Stadium | Delhi, India</p>
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
            <div>
              <span style={{ marginRight: "6px" }}>📅</span>
              <span
                style={{
                  color: styles.detailHeaderColor,
                  fontSize: styles.detailHeaderSize,
                  fontWeight: styles.detailHeaderWeight,
                }}
              >
                Starting on
              </span>
              <p
                style={{
                  color: styles.valuesColor,
                  fontSize: styles.valuesSize,
                  fontWeight: styles.valuesWeight,
                }}
              >
                Sun 26 Sept, 2024 | 7:00 P.M.
              </p>
            </div>
            <div>
              <span style={{ marginRight: "6px" }}>📅</span>
              <span
                style={{
                  color: styles.detailHeaderColor,
                  fontSize: styles.detailHeaderSize,
                  fontWeight: styles.detailHeaderWeight,
                }}
              >
                Closing on
              </span>
              <p
                style={{
                  color: styles.valuesColor,
                  fontSize: styles.valuesSize,
                  fontWeight: styles.valuesWeight,
                }}
              >
                Sun 30 Sept, 2024 | 11:00 P.M.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEventDetails;
