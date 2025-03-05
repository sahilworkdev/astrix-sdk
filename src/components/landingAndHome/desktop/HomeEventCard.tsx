import React from "react";
import { useTheme } from "../../../providers/ThemeProvider";
import { formatDateInIST, formatTimeInIST } from "../../../utils";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

interface HomeEventCardProps {
  item: any;
  backgroundColor?: string;
  fontFamily?: string;
}

export default function HomeEventCard({
  item,

  backgroundColor = "gray",
  fontFamily,
}: HomeEventCardProps) {
  const { accentColor } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        height: "100%",
        width: "100%",
        borderRadius: "16px",
        background: `${backgroundColor}`,
        fontFamily: `${fontFamily}`,
        cursor: "pointer",
        border: "1px solid #4e4f5080",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* image  and music tab */}
      <div>
        <div
          style={{
            position: "relative",
            height: "247px",
            width: "100%",
            borderRadius: "16px",
            background:
              "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))",
          }}
        >
          <img
            src={
              item?.superEventId
                ? item?.superEventImages?.["5_4"]?.[0] ||
                  item?.superEventImages?.["16_9"]?.[0]
                : item?.images?.["5_4"]?.[0] ||
                  item?.images?.["16_9"]?.[0] ||
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt=""
            style={{
              objectFit: "cover",
              borderRadius: "16px",
              height: "100%",
              width: "100%",
            }}
          />
          {(item?.metaData?.spotify?.tracks?.length > 0 ||
            item?.metaData?.spotify?.playlists?.length > 0) && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                zIndex: 99999,
              }}
            >
              {/* <MusicTab data={item} /> */}
              mucic tab here
            </div>
          )}
        </div>
      </div>
      {/* event details */}
      <div
        style={{
          padding: "16px",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              border: `1px solid ${accentColor}`,
              borderRadius: "50%",
              height: "44px",
              width: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={
                item?.avatar ?? item?.user?.avatar ?? "/Icons/default-user.svg"
              }
              width={44}
              height={44}
              alt="event pic"
              style={{ borderRadius: "50%", objectFit: "contain" }}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#E8EAED",
                whiteSpace: "nowrap",
                overflow: "hidden",

                textOverflow: "ellipsis",
              }}
            >
              {item?.superEventId
                ? item?.superEventName
                : item?.title || item?.name}
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#000",
                fontWeight: "500",
              }}
            >
              By {item?.author || item?.user?.username}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {item?.tags.slice(0, 3).map((tag: any, index: any) => (
            <div
              key={index}
              style={{
                border: `1px solid ${accentColor}`,
                padding: "4px 12px",
                borderRadius: "9999px",
                color: "white",
                fontSize: "0.75rem",
                cursor: "pointer",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "0.75rem",
          }}
        >
          <div style={{ display: "flex", gap: "4px" }}>
            <FaCalendarAlt style={{ color: `${accentColor}` }} size={20} />
            <p>
              {formatDateInIST(
                item?.superEventId ? item?.superEventStartDate : item?.startDate
              )}
              &nbsp;|&nbsp;
              {formatTimeInIST(
                item?.superEventId ? item?.superEventStartDate : item?.startDate
              )}
            </p>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <IoLocationSharp style={{ color: `${accentColor}` }} size={20} />
            <p>
              {item?.venue} &nbsp;|&nbsp; {item?.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
