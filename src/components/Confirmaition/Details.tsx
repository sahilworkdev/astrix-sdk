import React from "react";

const Details = ({ styles }: any) => {
  return (
    <div style={{ backgroundColor: styles.bgColor, padding: "10px", borderRight:"1px dashed #48505B",borderTop:"1px solid #272833",borderBottom:"1px solid #272833" , borderLeft:"1px dashed #48505B"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <h2
            style={{
              color: styles.ticketNameTextColor,
              fontSize: styles.ticketNameTextSize,
              fontWeight: styles.ticketNameTextWeight,
            }}
          >
            Ishq FM Grand Concert -
          </h2>
          <div style={{ margin: "10px 0px", display:"flex", justifyContent:"space-between" }}>
            <span
              style={{
                color: styles.priceTextColor,
                fontSize: styles.priceTextSize,
                fontWeight: styles.priceTextWeight,
              }}
            >
              Phase 2
            </span>
            <span
              style={{
                color: styles.priceTextColor,
                fontSize: styles.priceTextSize,
                fontWeight: styles.priceTextWeight,
              }}
            >
              {" "}
              x2
            </span>
            <span
              style={{
                color: styles.priceTextColor,
                fontSize: styles.priceTextSize,
                fontWeight: styles.priceTextWeight,
              }}
            >
              ₹1999
            </span>
          </div>
        </div>

        {/* Date & Time */}
        <div style={{display:"flex", gap:"20px"}}>
          <div style={{ fontSize: "14px", color: "#bbbbbb" }}>
            <strong>Starting on:</strong>
            <p> Sun 26 Sept, 2024 | 7:00 P.M.</p>
          </div>
          <div style={{ fontSize: "14px", color: "#bbbbbb" }}>
            <strong>Starting on:</strong>
            <p> Sun 26 Sept, 2024 | 7:00 P.M.</p>
          </div>
        </div>
        {/* Map */}
        <img
          src="/map-placeholder.png"
          alt="Map"
          style={{
            width: "100%",
            height: "100px",
            borderRadius: "8px",
            marginTop: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default Details;
