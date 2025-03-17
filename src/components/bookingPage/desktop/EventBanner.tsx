import React from "react";
import { useTheme } from "../../../providers/types";
import { formatDateInIST, formatTimeInIST } from "../../../utils";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const EventBanner = ({ data, currentData }: any) => {
  const { accentColor } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "45vh",
          gap: "16px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: `linear-gradient(0deg, rgba(20, 25, 31, 0.5), rgba(20, 25, 31, 0.5)), linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #141314 34.61%, rgba(20, 25, 31, 0) 100%)`,
            aspectRatio: currentData?.images["5_4"]?.[0]
              ? "5/4"
              : currentData?.images["16_9"]?.[0]
              ? "16/9"
              : "5/4",
            height: "100%",
            borderRadius: "8px",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={
              currentData
                ? currentData.images["5_4"]?.[0] ||
                  currentData.images["16_9"]?.[0]
                  ? currentData.images["5_4"]?.[0]?.includes("example.com") ||
                    currentData.images["16_9"]?.[0]?.includes("example.com")
                    ? "/newEventIcons/Poster.jpg"
                    : currentData.images["5_4"]?.[0] ||
                      currentData.images["16_9"]?.[0]
                  : "/newEventIcons/Poster.jpg"
                : (data?.images["5_4"]?.[0] || data?.images["16_9"]?.[0]) ??
                  "/newEventIcons/Poster.jpg"
            }
            alt={""}
            style={{
              position: "absolute",
              left: "0",
              zIndex: "10",
              objectFit: "cover",
              borderRadius: "12px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            width: "100%",
            backgroundColor: "transparent",
            borderRadius: "12px",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 12px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              gap: "16px",
              height: "100%",
              width: "60%",
              padding: "8px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <a
                  href={true ? `/profile/${currentData?.user?.username}` : "#"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      border: `1px solid ${accentColor}`,
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={
                        currentData
                          ? currentData?.user?.avatar ??
                            "/Icons/default-user.svg"
                          : data?.events?.[0]?.user?.avatar
                      }
                      alt={""}
                      width={36}
                      height={36}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </a>
                <div style={{ fontSize: "16px", color: "#CCD0D7" }}>
                  {currentData
                    ? currentData?.user?.name
                    : data?.events?.[0]?.user?.name}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxWidth: "460px",
              }}
            >
              <p
                style={{
                  width: "100%",
                  fontSize: "3em",
                  fontWeight: "600",
                  color: "#CCD0D7",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: (data?.name || currentData?.name)?.includes(
                    " "
                  )
                    ? 2
                    : 1,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}
              >
                {currentData?.name}
              </p>
              {currentData && currentData?.tags.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "8px",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    maxWidth: "500px",
                    maxHeight: "100px",
                    overflowX: "auto",
                  }}
                >
                  {currentData?.tags?.map((tag: string, index: number) => (
                    <div
                      key={index}
                      style={{
                        border: `1px solid ${accentColor}`,
                        fontWeight: "300",
                        whiteSpace: "nowrap",
                        fontSize: "16px",
                        color: "#CCD0D7",
                        borderRadius: "9999px",
                        padding: "8px 16px",
                        height: "32px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {currentData && (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <FaCalendarAlt
                        style={{ color: `${accentColor}` }}
                        size={20}
                      />
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "12px",
                        fontWeight: "200",
                        color: "#CCD0D7",
                      }}
                    >
                      <div style={{ fontWeight: "300", fontSize: "14px" }}>
                        Starting on
                      </div>
                      <div style={{ color: "#CCD0D7" }}>
                        {formatDateInIST(currentData?.startDate)} |{" "}
                        {formatTimeInIST(currentData?.startDate)}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <FaCalendarAlt
                        style={{ color: `${accentColor}` }}
                        size={20}
                      />
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "12px",
                        fontWeight: "200",
                        color: "#CCD0D7",
                      }}
                    >
                      <div style={{ fontWeight: "300", fontSize: "14px" }}>
                        Closing on
                      </div>
                      <div style={{ color: "#CCD0D7" }}>
                        {currentData?.metaData?.showEndDate ? (
                          `${formatDateInIST(
                            currentData?.endDate
                          )} | ${formatTimeInIST(currentData?.endDate)}`
                        ) : (
                          <p style={{ fontSize: "14px" }}>Onwards</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    href={`https://maps.google.com/maps?q=${currentData?.venue}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <IoLocationSharp
                        style={{ color: `${accentColor}` }}
                        size={20}
                      />
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "12px",
                        fontWeight: "200",
                        color: "#CCD0D7",
                      }}
                    >
                      <div>{currentData?.venue}</div>
                    </div>
                  </a>
                </div>
              )}

              {!currentData && data?.startDate && data?.endDate && (
                <div style={{ display: "flex", gap: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <FaCalendarAlt
                        style={{ color: `${accentColor}` }}
                        size={20}
                      />
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "12px",
                        fontWeight: "300",
                        color: "#CCD0D7",
                      }}
                    >
                      <p>Starting on</p>
                      <div style={{ color: "#CCD0D7" }}>
                        {formatDateInIST(data?.startDate) + " |"}
                      </div>
                      <div style={{ color: "#CCD0D7" }}>
                        {formatTimeInIST(data?.startDate)}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <FaCalendarAlt
                        style={{ color: `${accentColor}` }}
                        size={20}
                      />
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "12px",
                        fontWeight: "300",
                        color: "#CCD0D7",
                      }}
                    >
                      <p>Closing on</p>
                      <div style={{ color: "#CCD0D7" }}>
                        {formatDateInIST(data?.endDate) + " |"}
                      </div>
                      <div style={{ color: "#CCD0D7" }}>
                        {formatTimeInIST(data?.endDate)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
