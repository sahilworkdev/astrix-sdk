import React from "react";
import { BillSummary } from "../Cart/BillSummary";
import Ticket from "./Ticket";

const HeadConfirmation = () => {
    
    const thankYouStyles = {
        orderIdColor:"#E8EAED",
        orderIdSize: "12px",
        orderIdWeight: "500",
        thankYouTextColor: "#E8EAED",
        thankYouTextSize: "28px",
        thankYouTextWeight: "500",
    }

    const trancDetailStyles = {
        headTextColor:"#939CAA", 
        headTextSize: "12px",
        headTextWeight: "500",
        valueTextColor:"#E8EAED",
        valueTextSize: "16px",
        valueTextWeight: "500",
    }
    
  const billSummaryStyles = {
    headingTextColor: "#E8EAED",
    headingTextSize: "22px",
    headingTextWeight: "700",
    listTagColor: "#E8EAED",
    listTagSize: "16px",
    listTagWeight: "400",
    listValueColor: "#AFB6C0",
    listValueSize: "16px",
    listValueWeight: "400",
    totalAmountAndPayTagColor: "#E8EAED",
    totalAmountAndPayTagSize: "16px",
    totalAmountAndPayTagWeight: "400",
    totalAmountAndPayValueColor: "#B0E681",
    totalAmountAndPayValueSize: "20px",
    totalAmountAndPayValueWeight: "700",
  };
  return (
    <div style={{ backgroundColor: "#0E0F0C", minHeight: "100vh", padding:"20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          <p>{"<"}</p>
          <p style={{ color: "#CCD0D7", fontSize: "20px", fontWeight: "400" }}>
            Ticket
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          <p>p</p>
          <p style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: "600" }}>Home</p>
        </div>
      </div>
      <div style={{ marginTop:'20px'}}>
        <div style={{ display: "flex" , margin:"20px 0px"}}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p style={{color:thankYouStyles.orderIdColor, fontSize:thankYouStyles.orderIdSize, fontWeight:thankYouStyles.orderIdWeight}}>order Id</p>
            <p style={{color:thankYouStyles.thankYouTextColor, fontSize:thankYouStyles.thankYouTextSize, fontWeight:thankYouStyles.thankYouTextWeight}}>Thank You</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent:"space-between", width:"70%" }}>
            <div>
              <p style={{color:trancDetailStyles.headTextColor, fontSize:trancDetailStyles.headTextSize, fontWeight:trancDetailStyles.headTextWeight}}>Booking Date</p>
              <div>
              <p style={{color:trancDetailStyles.valueTextColor, fontSize:trancDetailStyles.valueTextSize, fontWeight:trancDetailStyles.valueTextWeight}}>erueriuiuer</p>
              </div>
            </div>
            <div>
              <p style={{color:trancDetailStyles.headTextColor, fontSize:trancDetailStyles.headTextSize, fontWeight:trancDetailStyles.headTextWeight}}>Booking Date</p>
              <div>
              <p style={{color:trancDetailStyles.valueTextColor, fontSize:trancDetailStyles.valueTextSize, fontWeight:trancDetailStyles.valueTextWeight}}>erueriuiuer</p>
              </div>
            </div>
            <div>
              <p style={{color:trancDetailStyles.headTextColor, fontSize:trancDetailStyles.headTextSize, fontWeight:trancDetailStyles.headTextWeight}}>Booking Date</p>
              <div>
                <p style={{color:trancDetailStyles.valueTextColor, fontSize:trancDetailStyles.valueTextSize, fontWeight:trancDetailStyles.valueTextWeight}}>erueriuiuer</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap:'10px' }}>
            <div>
              <Ticket />
            </div>
            <div
              style={{
                backgroundColor: "#1F1F1F99",
                padding: "10px",
                borderRadius: "12px",
                border:"1px solid #31373F66"
              }}
            >
              <BillSummary styles={billSummaryStyles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadConfirmation;
