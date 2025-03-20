import React from "react";

const Questions = (props: any) => {
  return (
    <div
      style={{
        backgroundColor: "#1F1F1F99",
        border: "1px solid #31373F66",
        borderRadius: "12px",
        padding: "12px",
      }}
    >
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <p style={{ color: "#F6F2FF", fontSize: "18px", fontWeight: "400" }}>
          Questions ?
        </p>
        <p style={{ color: "red", fontSize: "16px", fontWeight: "400" }}>*</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        {props.questionType === "text" && (
          <input
            style={{
              outline: "none",
              color: "#768293",
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              borderBottom: "1px solid #48505B",
              backgroundColor: "transparent",
              padding: "10px",
              width: "100%",
            }}
            type={props.questionType}
            placeholder="Type your answer here"
          />
        )}

        {props.questionType === "textarea" && (
          <textarea
            style={{
              outline: "none",
              color: "#768293",
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              borderBottom: "1px solid #48505B",
              backgroundColor: "transparent",
              padding: "10px",
              width: "100%",
            }}
            placeholder="Type your answer here"
          />
        )}
        <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
        {props.questionType === "checkbox" &&
          props.checkboxList.map((item: any, index: any) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  border: "1px solid #31373F",
                  borderRadius: "8px",
                  backgroundColor:"#14191F80",
                  padding: "10px",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    marginLeft: "5px",
                    color: "#768293",
                    fontSize: "16px",
                    fontWeight: "600",
                    backgroundColor: "transparent",
                  }}
                />
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {item}
                </p>
              </div>
            );
          })
          }
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
        {props.questionType === "radio" &&
          props.radioList.map((item: any, index: any) => {
            return (
              <div
                key={index}
                style={{      display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    border: "1px solid #31373F",
                    borderRadius: "8px",
                    backgroundColor:"#14191F80",
                    padding: "10px",}}
              >
                <input
                  type="radio"
                  name={props.name}
                  style={{
                    marginLeft: "5px",
                    color: "#768293",
                    fontSize: "16px",
                    fontWeight: "600",
                    border: "2px solid green",
                    backgroundColor: "transparent",
                  }}
                  value={item}
                />
                <span style={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}>{item}</span>
              </div>
            );
          })}
          </div>
        {props.questionType === "date" && (
          <input
            type="date"
            style={{
              outline: "none",
              color: "#768293",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "8px",
              border: "1px solid #48505B",
              backgroundColor: "transparent",
              padding: "10px",
              width: "100%",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Questions;
