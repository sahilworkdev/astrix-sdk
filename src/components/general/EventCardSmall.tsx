import React from "react";

const EventCardSmall = () => {
  return (
    <div
      style={{
        background: "radial-gradient(circle, #AFE67F66, #FFFFFF00)",
        borderRadius: "12px",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        width: "385px",
        border:"1px solid #EEEDED10"
      }}
    >
      {/* Event Image with Overlay */}
      <div
        style={{
          borderRadius: "10px",
          width: "full",
          aspectRatio: "6/4",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: 20,
          }}
        >
          <img
            src="/vite.svg"
            alt="Event Banner"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{
            padding: "8px",
            width: "100%",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            zIndex: 30,
          }}
        >
          <div
            style={{
              backgroundColor: "#1F1F1F99",
              backdropFilter: 'blur(3.8px)',
              width: "100%",
              borderRadius: "8px",
              border:"1px solid #31373F66",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div style={{ display:"flex", gap:"10px", alignItems:'center', fontSize: "14px", margin: 0 }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "100%",
                  border: "1px solid #B0E681",
                }}
              >
                <img
                  src="/vite.svg"
                  alt="Event Banner"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                  }}
                />
              </div>
              <p> Time les week end</p>
            </div>
            <div
              style={{
                width: "50px",
                height: "5px",
                background: "linear-gradient(to right, #fff, transparent)",
                borderRadius: "5px",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div style={{ marginTop: "10px", padding: "12px" }}>
        <div style={{ display: "flex",  paddingBottom:"10px", gap: "10px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "100%",
              border: "1px solid #B0E681",
            }}
          >
            <img
              src="/vite.svg"
              alt="Event Banner"
              style={{ width: "100%", height: "100%", borderRadius: "100%" }}
            />
          </div>
          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
              Junkie Event the Blast
            </h3>
            <p
              style={{ fontSize: "14px", color: "#bbb", marginBottom: "10px" }}
            >
              By Hot Sauce
            </p>
          </div>
        </div>

        {/* Category Tags */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          {["Collectible", "Music", "Songs"].map((tag, index) => (
            <span
              key={index}
              style={{
                padding: "5px 12px",
                borderRadius: "75px",
                fontSize: "12px",
                border:"1px solid white"
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ fontSize: "14px", color: "#bbbbbb" }}>
            <strong>Starting on:</strong>
            <p> Sun 26 Sept, 2024 | 7:00 P.M.</p>
          </div>
          <div style={{ fontSize: "14px", color: "#bbbbbb" }}>
            <strong>Starting on:</strong>
            <p> Sun 26 Sept, 2024 | 7:00 P.M.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardSmall;
