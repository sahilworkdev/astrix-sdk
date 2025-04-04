import React from "react";
import YouCart from "./YouCart";
import PaymentSelection from "./PaymentSelection";

const CartHead = () => {
  const paymentStyles = {
    textColor: "#E8EAED",
    textSize: "16px",
    textWeight: "400",
  };

  return (
    <div style={{padding: "30px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom:"45px" }}>
        <div>
          <p>evws</p>
        </div>
        <p>x</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          overflow: "auto",
          height: "100%",
        }}
      >
        <div style={{ width: "45%"}}>
          <YouCart />
        </div>
        <div style={{ width: "55%" }}>
          <PaymentSelection styles={paymentStyles} />
        </div>
      </div>
    </div>
  );
};

export default CartHead;
