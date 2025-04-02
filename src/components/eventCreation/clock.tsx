import React from "react";

const TimeDisplay = ({
  selectedTime,
  handleIsHourChange,
  isHourView,
  handleAMPMUpdate,
}: {
  selectedTime: { hour: number; minute: number; isPM: boolean };
  handleIsHourChange: (isHour: boolean) => void;
  isHourView: boolean;
  handleAMPMUpdate: (ampm: "AM" | "PM") => void;
}) => (
  <div
    style={{
      textAlign: "center",
      display: "flex",
      gap: "10px",
      alignItems: "center",
      fontFamily: "Mulish, sans-serif",
      fontWeight: "300",
    }}
  >
    <div style={{ fontSize: "1.25rem" }}>
      <button
        type="button"
        onClick={() => handleIsHourChange(true)}
        style={{
          color: isHourView ? "#b0e681" : "#E8EAED",
          border: "none",
          background: "none",
          fontSize: "inherit",
          cursor: "pointer",
        }}
      >
        {selectedTime?.hour?.toString().padStart(2, "0")}
      </button>
      <span>:</span>
      <button
        type="button"
        onClick={() => handleIsHourChange(false)}
        style={{
          color: !isHourView ? "#b0e681" : "#E8EAED",
          border: "none",
          background: "none",
          fontSize: "inherit",
          cursor: "pointer",
        }}
      >
        {selectedTime?.minute?.toString().padStart(2, "0")}
      </button>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        fontSize: "1.1rem",
      }}
    >
      <button
        style={{
          color: selectedTime?.isPM ? "#b0e681" : "#E8EAED",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={() => handleAMPMUpdate("PM")}
      >
        PM
      </button>
      <button
        style={{
          color: !selectedTime?.isPM ? "#b0e681" : "#E8EAED",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={() => handleAMPMUpdate("AM")}
      >
        AM
      </button>
    </div>
  </div>
);

const TimeDial = ({
  isHourView,
  selectedTime,
  handleTimeClick,
}: {
  isHourView: boolean;
  selectedTime: { hour: number; minute: number };
  handleTimeClick: (isHour: boolean, value: number) => void;
}) => {
  const items = isHourView
    ? Array.from({ length: 12 }, (_, i) => (i === 0 ? 12 : i))
    : Array.from({ length: 60 }, (_, i) => i).filter((n) => n % 5 === 0);

  const selectedValue = isHourView
    ? selectedTime.hour === 12
      ? 0
      : selectedTime.hour
    : selectedTime.minute === 60
      ? 0
      : selectedTime.minute;

  const angle = isHourView
    ? (selectedValue / 12) * 360
    : (selectedValue / 60) * 360;

  const radians = (angle * Math.PI) / 180;
  const lineX = Math.sin(radians) * 90 + 128;
  const lineY = -Math.cos(radians) * 90 + 128;

  return (
    <div
      style={{
        width: "256px",
        height: "256px",
        backgroundColor: "rgba(33, 33, 33, 0.08)",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          stroke: "#b0e681",
          fill: "#b0e681",
        }}
      >
        <line x1="128" y1="128" x2={lineX} y2={lineY} strokeWidth="2" />
        <circle cx="128" cy="128" r="4" />
      </svg>
      {items.map((item, index) => {
        const buttonRadius = 104;
        const itemAngle = (index / items.length) * 360;
        const itemRadians = (itemAngle * Math.PI) / 180;
        const x = Math.sin(itemRadians) * buttonRadius + 128;
        const y = -Math.cos(itemRadians) * buttonRadius + 128;

        return (
          <button
            key={item}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
              width: "36px",
              height: "36px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              fontFamily: "Mulish, sans-serif",
              background:
                (isHourView && selectedTime.hour === item) ||
                (!isHourView && selectedTime.minute === item)
                  ? "#b0e681"
                  : "none",
              color:
                (isHourView && selectedTime.hour === item) ||
                (!isHourView && selectedTime.minute === item)
                  ? "black"
                  : "#E8EAED",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() =>
              handleTimeClick(isHourView, isHourView && item === 0 ? 12 : item)
            }
          >
            {isHourView ? item.toString() : item.toString().padStart(2, "0")}
          </button>
        );
      })}
    </div>
  );
};

export { TimeDisplay, TimeDial };
