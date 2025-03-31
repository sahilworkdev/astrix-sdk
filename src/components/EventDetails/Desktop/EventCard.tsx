import React from "react";

const EventCard = ({ styles, data, currentData }: any) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        background: `linear-gradient(to top left, ${styles.backgroundColor}, ${styles.backgroundColorTo})`,
        borderRadius: "12px",
      }}
    >
      {/* Event Cover */}
      <div
        style={{
          width: styles.imageWidth,
          aspectRatio:styles.aspectRatio
        }}
      >
        <div
          style={{
            width: "100%",
            height: `100%`,
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="/vite.svg"
            alt="Event Cover"
          />
        </div>
      </div>

      {/* Event Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* User Avatar */}
          <div
            style={{
              width: styles.profileImageWidth,
              height: styles.profileImageHeight,
              border: `2px solid ${styles.profileBoderColor}`,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="/vite.svg"
              alt="User Avatar"
            />
          </div>

          <p
            style={{
              color: styles.userNameTextColor,
              fontSize: styles.userNameTextSize,
              fontWeight: styles.userNameTextWeight,
              margin: 0,
            }}
          >
            Yvuaraj eofn
          </p>
        </div>

        <div>
          <p
            style={{
              color: styles.descriptionTextColor,
              fontSize: styles.descriptionTextSize,
              fontWeight: styles.descriptionTextWeight,
              margin: "4px 0",
            }}
          >
            rgoh erugneior eriojgerio eiobje eiojetoi eriojgqi
          </p>
        </div>

        <div>
          <p
            style={{
              border: "1px solid #FFFFFF",
              padding: "5px 20px 5px 20px",
              borderRadius: "20px",
              width: "fit-content",
              color: styles.tagTextColor,
              fontSize: styles.tagTextSize,
              fontWeight: styles.tagTextWeight,
            }}
          >
            Music
          </p>
        </div>

        {/* Event Details */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "12px",
          }}
        >
          {/* Starting On */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "24px", color: "#a3e635" }}>📅</span>
            <div>
              <p
                style={{
                  margin: 0,
                  color: styles.detailHeadingTextColor,
                  fontSize: styles.detailHeadingTextSize,
                  fontWeight: styles.detailHeadingTextWeight,
                }}
              >
                Starting on
              </p>
              <p
                style={{
                  margin: 0,
                  color: styles.detailTextColor,
                  fontSize: styles.detailTextSize,
                  fontWeight: styles.detailTextWeight,
                }}
              >
                Mar 18, 2025 | 12:45 AM
              </p>
            </div>
          </div>

          {/* Closing On */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "24px", color: "#a3e635" }}>📅</span>
            <div>
              <p
                style={{
                  margin: 0,
                  color: styles.detailHeadingTextColor,
                  fontSize: styles.detailHeadingTextSize,
                  fontWeight: styles.detailHeadingTextWeight,
                }}
              >
                Closing on
              </p>
              <p
                style={{
                  margin: 0,
                  color: styles.detailTextColor,
                  fontSize: styles.detailTextSize,
                  fontWeight: styles.detailTextWeight,
                }}
              >
                Mar 26, 2025 | 12:45 AM
              </p>
            </div>
          </div>

          {/* Location */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "24px", color: "#a3e635" }}>📍</span>
            <div>
              <p
                style={{
                  margin: 0,  color: styles.detailTextColor,
                  fontSize: styles.detailTextSize,
                  fontWeight: styles.detailTextWeight,
                }}
              >
                office7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
