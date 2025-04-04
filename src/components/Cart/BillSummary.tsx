import React from "react";

export const BillSummary = ({ styles, selectedTicket }: any) => {
  return (
    <div style={{}}>
      {/* Title */}
      <h2
        style={{
          color: styles.headingTextColor,
          fontSize: styles.headingTextSize,
          fontWeight: styles.headingTextWeight,
          marginBottom: "16px",
        }}
      >
        Bill Summary
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          borderBottom: "1px solid #31373F",
          borderTop: "1px solid #31373F",
          padding: "16px 0px",
        }}
      >
        {/* Price Details */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap:"20px",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#bbb",
            }}
          >
            <span
              style={{
                color: styles.listTagColor,
                fontSize: styles.listTagSize,
                fontWeight: styles.listTagWeight,
              }}
            >
              {selectedTicket?.name}
            </span>
            <span
              style={{
                color: styles.listValueColor,
                fontSize: styles.listValueSize,
                fontWeight: styles.listValueWeight,
              }}
            >
              {100}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap:"20px",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#bbb",
            }}
          >
            <span
              style={{
                color: styles.listTagColor,
                fontSize: styles.listTagSize,
                fontWeight: styles.listTagWeight,
              }}
            >
              Add On
            </span>
            <span
              style={{
                color: styles.listValueColor,
                fontSize: styles.listValueSize,
                fontWeight: styles.listValueWeight,
              }}
            >
              ₹299
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap:"20px",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#bbb",
            }}
          >
            <span
              style={{
                color: styles.listTagColor,
                fontSize: styles.listTagSize,
                fontWeight: styles.listTagWeight,
              }}
            >
              Sub Total
            </span>
            <span
              style={{
                color: styles.listValueColor,
                fontSize: styles.listValueSize,
                fontWeight: styles.listValueWeight,
              }}
            >
              ₹2298
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap:"20px",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#bbb",
            }}
          >
            <span
              style={{
                color: styles.listTagColor,
                fontSize: styles.listTagSize,
                fontWeight: styles.listTagWeight,
              }}
            >
              Booking Fee
            </span>
            <span
              style={{
                color: styles.listValueColor,
                fontSize: styles.listValueSize,
                fontWeight: styles.listValueWeight,
              }}
            >
              ₹20.50
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap:"20px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <span
              style={{
                color: styles.totalAmountAndPayTagColor,
                fontSize: styles.totalAmountAndPayTagSize,
                fontWeight: styles.tickeCountAndPriceWeight,
              }}
            >
              Total Amount
            </span>
            <span
              style={{
                color: styles.totalAmountAndPayValueColor,
                fontSize: styles.totalAmountAndPayValueSize,
                fontWeight: styles.totalAmountAndPayValueWeight,
              }}
            >
              ₹2318.50
            </span>
          </div>
        </div>
      </div>
      {/* Final Amount */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap:"20px",
          fontSize: "16px",
          fontWeight: "bold",
          paddingTop: "10px",
        }}
      >
        <span
          style={{
            color: styles.totalAmountAndPayTagColor,
            fontSize: styles.totalAmountAndPayTagSize,
            fontWeight: styles.tickeCountAndPriceWeight,
          }}
        >
          Amount to be Paid
        </span>
        <span
          style={{
            color: styles.totalAmountAndPayValueColor,
            fontSize: styles.totalAmountAndPayValueSize,
            fontWeight: styles.totalAmountAndPayValueWeight,
          }}
        >
          ₹3998
        </span>
      </div>
    </div>
  );
};
