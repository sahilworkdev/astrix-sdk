import React, { useState } from "react";

const EventDeailSection = ({ styles, values }: any) => {
  // const [artists, setArtists] = useState([])

  const artists = values?.events?.flatMap((event: any) => event.artists || []);
  return (
    <div>
      <div
        style={{
          color: "#ffffff",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
        }}
      >
        {/* About the Event Section */}
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              color: styles.headingTextColor,
              fontSize: styles.headingTextSize,
              fontWeight: styles.headingTextWeight,
              marginBottom: "5px",
              fontFamily: "Mulish",
            }}
          >
            About the event
          </h2>
          <p
            style={{
              color: styles.detailTextColor,
              fontSize: styles.detailTextSize,
              fontWeight: styles.detailTextWeight,
              marginBottom: "5px",
              fontFamily: "Mulish",
            }}
          >
            {values?.description}
          </p>
        </div>

        <div>
          <h3
            style={{
              color: styles.headingTextColor,
              fontSize: styles.headingTextSize,
              fontWeight: styles.headingTextWeight,
              marginBottom: "5px",
              fontFamily: "Mulish",
            }}
          >
            Artists
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              rowGap: "16px",
              marginBottom: "16px",
              fontFamily: "Mulish",
            }}
          >
            {artists?.map((i: any, index: any) => (
              <div
                key={index}
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <img
                  style={{
                    width: styles.artistProfileImageWidth,
                    height: styles.artistProfileImageWidth,
                    borderRadius: "100%",
                  }}
                  src={`${i?.avatar}`}
                  alt="Artist 1"
                />
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center",}}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: styles.artistNameTextColor,
                        fontSize: styles.artistNameTextSize,
                        fontWeight: styles.artistNameTextWeight,
                      }}
                    >
                      {i?.name}
                    </span>
                    <span style={{}}>|</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "5px",
                      gap: "5px",
                    }}
                  >
                    {i.socials?.instagram && (
                      <a
                        key={index}
                        href={i.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/Icons/instagram.svg" // Use a proper Instagram icon instead of the link itself
                          alt={`${i.name} Instagram`}
                          style={{ width: "16px", height: "16px" }}
                        />
                      </a>
                    )}

                    {i.socials?.spotify && (
                      <a
                        key={index}
                        href={i.socials.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/Icons/spotify.svg"// Use a proper Instagram icon instead of the link itself
                          alt={`${i.name} spotify`}
                          style={{ width: "16px", height: "16px" }}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invite Your Friends Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: styles.headingTextColor,
              fontSize: styles.headingTextSize,
              fontWeight: styles.headingTextWeight,
              marginBottom: "5px",
              fontFamily: "Mulish",
            }}
          >
            Invite your friends
          </h2>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>🔗</span>
        </div>

        {/* Terms & Conditions Section */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            <h2
              style={{
                color: styles.headingTextColor,
                fontSize: styles.headingTextSize,
                fontWeight: styles.headingTextWeight,
                marginBottom: "5px",
                fontFamily: "Mulish",
              }}
            >
              Terms & conditions
            </h2>
            <span style={{ fontSize: "20px" }}>▲</span>
          </div>
          <p
            style={{
              color: styles.detailTextColor,
              fontSize: styles.detailTextSize,
              fontWeight: styles.detailTextWeight,
              marginBottom: "5px",
              fontFamily: "Mulish",
            }}
          >
            This is a single-entry show. Please keep your tickets and wristbands
            on you at all times. Once you exit the show area, you may not be
            permitted to enter again. A government-issued, valid photo ID may be
            requested at entry. Show details may change at the sole discretion
            of the organiser. All announcements will be on Astrix social media
            pages, and on email/WhatsApp to existing ticket holders. If you are
            under the age of 16, you will need to be accompanied by an adult
            guardian. Liquor will be served to guests of the Legal Drinking Age
            (LDA) only. LDA bands will be provided at the venue on proof of age.
            If an underage individual is found consuming alcohol, the ward's
            adult guardian will be liable for all resulting actions &
            consequences. No refunds on purchased tickets are possible. Rights
            of admission are reserved, even to valid ticket holders. Organisers
            hold the right to deny late entry to the event. Venue rules apply.
            Beware of counterfeit tickets. The organiser holds the free right to
            use any photographs, video, graphics or other media form captured,
            shot or recorded by visitors at the event and shared on public
            platforms including but not limited to Facebook, Twitter, Instagram,
            Pinterest, and Blogs for usage including but not limited to
            commercial, advertising, and branding purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDeailSection;
