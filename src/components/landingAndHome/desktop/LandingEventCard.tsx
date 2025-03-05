import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "../../../providers/ThemeProvider";
import { formatDateInIST, formatTimeInIST } from "../../../utils";

const LandingEventCard = ({ item, key }: any) => {
  const { accentColor } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        borderRadius: "0.5rem",
        background: "#14191F70",
        padding: "0.75rem",
      }}
    >
      {/* image */}
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          borderRadius: "0.5rem",
          background:
            "linear-gradient(to bottom, rgba(20,25,31,0.7) 0%, rgba(20,25,31,0.7) 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 0,
            left: 0,
            right: 0,
            height: "300px",
            width: "100%",
          }}
        >
          <img
            src={
              (item && item?.superEventId
                ? item?.superEventImages["5_4"]?.[0] ||
                  item?.superEventImages["16_9"]?.[0]
                : item?.images &&
                  (item.images["5_4"]?.[0] || item.images["16_9"]?.[0])) ||
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt=""
            style={{
              zIndex: 10,
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "0.5rem 0.5rem 0 0",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>

      {/* details */}
      <div
        style={{
          display: "flex",

          width: "100%",

          borderRadius: "0.5rem 0.5rem 0 0",
          marginTop: "0.25rem",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            fontWeight: "500",
            fontFamily: "Mulish",
            color: "#E8EAED",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {item?.superEventId
            ? item?.superEventName
            : item?.title
            ? item?.title
            : item?.name}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <FaCalendarAlt style={{ color: `${accentColor}` }} size={20} />

          <div
            style={{
              fontSize: "16px",
              fontWeight: "200",
              fontFamily: "Mulish",
              width: "100%",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <span>
              {formatDateInIST(
                item?.superEventId ? item?.superEventStartDate : item?.startDate
              )}
            </span>
            &nbsp;|&nbsp;
            <span>
              {formatTimeInIST(
                item?.superEventId ? item?.superEventStartDate : item?.startDate
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingEventCard;
