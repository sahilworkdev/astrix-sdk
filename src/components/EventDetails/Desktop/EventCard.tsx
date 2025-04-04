import Arrow from "@/components/general/Arrow";
import CalendarIcon from "@/components/general/CalendarIcon";
import LocationIcon from "@/components/general/LocationIcon";
import React from "react";

const EventCard = ({ styles, values }: any) => {
  return (
    <div
      style={{
        padding: "0px 16px 16px 16px",
        background: `linear-gradient(to top left, ${styles.backgroundColor}, ${styles.backgroundColorTo})`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "20px 0px",
        }}
      >
        <p id="left" ><Arrow color="#E8EAED" size="24px" /></p>
        <p style={{ color: "#CCD0D7", fontSize: "28px", fontWeight: "500" }}>
          {values?.name}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        {/* Event Cover */}
        <div
          style={{
            width: styles.imageWidth,
            aspectRatio: styles.aspectRatio,
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
              src={`${values?.images?.[0]}`}
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
              {values?.author}
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
              {values?.name}
            </p>
          </div>

          <div  style={{display:"flex", gap:"10px", alignItems:"center"}}>
            {
              values?.tags?.map((i:any,index:any) => 
                <p key={index}
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
              )
            }
           
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
              <span style={{ fontSize: "24px", color: "#a3e635" }}>
                <CalendarIcon  bgColor={"#E8EAED"} height={24} width={24}/>
              </span>
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
                  {values?.startDate}
                </p>
              </div>
            </div>

            {/* Closing On */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "24px", color: "#a3e635" }}><CalendarIcon  bgColor={"#E8EAED"} height={24} width={24}/></span>
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
                  {values?.endDate}
                </p>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "24px", color: "#a3e635" }}>
                <LocationIcon bgColor={"#E8EAED"} height={24} width={24} />
              </span>
              <div>
                <p
                  style={{
                    margin: 0,
                    color: styles.detailTextColor,
                    fontSize: styles.detailTextSize,
                    fontWeight: styles.detailTextWeight,
                  }}
                >
                  {values?.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
