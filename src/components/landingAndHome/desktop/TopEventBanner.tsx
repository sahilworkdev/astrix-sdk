import React from "react";

import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../../general/Button";
import { formatDateInIST, formatTimeInIST } from "../../../utils";
import { useTheme } from "../../../providers/ThemeProvider";

const TopEventBanner = ({ item }: any) => {
  const { accentColor } = useTheme();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        backgroundColor: "gray",
        borderRadius: "0.5rem",
        height: "450px",
      }}
    >
      {/* image */}
      <div
        style={{
          borderRadius: "0.5rem",
          overflow: "hidden",
          height: "100%",
          width: "700px",
          minWidth: "450px",
        }}
      >
        <img
          src={
            (item && item?.superEventId
              ? item?.superEventImages["5_4"]?.[0] ||
                item?.superEventImages["16_9"]?.[0]
              : item?.images &&
                (item.images["5_4"]?.[0] || item.images["16_9"]?.[0])) ||
            "https://placehold.co/600x400/orange/white"
          }
          alt={item?.name}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "0.5rem",
            objectFit: "cover",
          }}
        />
      </div>

      {/* user pfp, username, desc and  tags */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "20px",
          padding: "20px",
          minWidth: "400px",
          maxWidth: "600px",
          overflow: "hidden",
        }}
      >
        {/* pfp and name */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              border: `1px solid ${accentColor}`,
              overflow: "hidden",
            }}
          >
            <img src={item?.avatar ?? "https://placehold.co/30x30"} alt="pfp" />
          </div>
          <div>
            <span
              style={{ fontWeight: 400, fontSize: "25px", color: "#CCD0D7" }}
            >
              {item?.user?.username ? item?.user?.username : item?.name}
            </span>
          </div>
        </div>

        {/* event name, desc tags, artists */}
        <div>
          <h2
            style={{
              width: "100%",
              fontSize: "2.5rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontWeight: 600,
              color: "#E8EAED",

              marginTop: "-0.25rem",
              paddingBottom: "0.25rem",
            }}
          >
            {item?.superEventId
              ? item?.superEventName
              : item?.title
              ? item?.title
              : item?.name}
          </h2>
        </div>
        <div
          style={{
            width: "100%",
            fontSize: ".8rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            maxHeight: "250px",
            fontWeight: 500,
            color: "#E8EAED",
            marginTop: "-0.25rem",
            paddingBottom: "0.25rem",
          }}
        >
          {item?.description}
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "10px",
            maxHeight: "150px",
            maxWidth: "500px",
            overflow: "auto",
          }}
        >
          {item?.tags.map((tag: string, index: number) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: "30px",
                border: `1px solid ${accentColor}`,
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                fontWeight: 500,
                fontSize: "0.875rem",
                color: "#E8EAED",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            gap: "0.75rem",
            overflowX: "auto",
            maxWidth: "500px",
            overflow: "auto",
          }}
        >
          {item &&
            item?.artists?.length > 0 &&
            item?.artists?.slice(0, 6)?.map((artData: any, index: number) => {
              if (!artData?.name && !artData?.avatar) return null;
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                  key={index}
                >
                  <div
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      border: `2px solid ${accentColor}`,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={
                        artData?.avatar ??
                        "https://astrix.blob.core.windows.net/cdn/Avatars/Number=1.png"
                      }
                      alt={item?.name}
                      width={35}
                      height={35}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      color: "#CCD0D7",
                      fontSize: "1rem",
                    }}
                  >
                    {artData?.name}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* date and location and btn */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px 40px",
        }}
      >
        {/* date and location */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* starting date */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <FaCalendarAlt style={{ color: `${accentColor}` }} size={20} />
            <div
              style={{
                display: "flex",
                gap: "2px",
                flexDirection: "column",
                fontWeight: 400,
                fontSize: "18px",
                color: "#CCD0D7",
              }}
            >
              <span>Starts On</span>
              <span
                style={{
                  color: "#CCD0D7",
                }}
              >
                {" "}
                {formatDateInIST(
                  item?.superEventId
                    ? item?.superEventStartDate
                    : item?.startDate
                )}
                &nbsp;|&nbsp;
                {formatTimeInIST(
                  item?.superEventId
                    ? item?.superEventStartDate
                    : item?.startDate
                )}
              </span>
            </div>
          </div>
          {/* closing date */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "start",
              justifyContent: "start",
              fontWeight: 400,
              fontSize: "16px",
              color: "#CCD0D7",
            }}
          >
            <FaCalendarAlt style={{ color: `${accentColor}` }} size={20} />
            <div
              style={{
                display: "flex",
                gap: "2px",
                flexDirection: "column",
                fontWeight: 300,
                fontSize: "16px",
                color: "#CCD0D7",
              }}
            >
              <span>Closing On</span>
              <span>
                {item?.metaData?.showEndDate
                  ? `${formatDateInIST(
                      item?.superEventId
                        ? item?.superEventEndDate
                        : item?.endDate
                    )} \u00A0|\u00A0 ${formatTimeInIST(
                      item?.superEventId
                        ? item?.superEventEndDate
                        : item?.endDate
                    )}`
                  : "Onwards"}
              </span>
            </div>
          </div>
          {/* location */}
          <div style={{ display: "flex", gap: "10px", alignItems: "start" }}>
            <IoLocationSharp style={{ color: `${accentColor}` }} size={20} />
            <div
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                fontWeight: 300,
                fontSize: "16px",
                color: "#CCD0D7",
              }}
            >
              <a
                href={`https://maps.google.com/maps?q=${item?.venue}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.venue}
              </a>
            </div>
          </div>
        </div>

        <Button
          label="Book Tickets"
          onClick={() => {}}
          style={{
            backgroundColor: `${accentColor}`,
            border: "0px",
          }}
        />
      </div>
    </div>
  );
};

export default TopEventBanner;
