import React from "react";
import EventTicket from "./EventTicket";
import Btns from "./Btns";

const Survey = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "50%",
          aspectRatio: "7/5",
          borderRadius: "12px",
          border: "2px solid #31373F66",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", maxHeight:"20%" }}>
          <p style={{ color: "#CCD0D7", fontSize: "28px", fontWeight: "500" }}>
            Survey
          </p>
          <p style={{ color: "#CCD0D7", fontSize: "28px", fontWeight: "500" }}>
            x
          </p>
        </div>
        <div style={{ marginTop: "20px", overflow:"auto", height:"80%" }}>
          <EventTicket />
        </div>
        <div style={{maxHeight:"20%" }}>
          <Btns />
        </div>
      </div>
    </div>
  );
};

export default Survey;
