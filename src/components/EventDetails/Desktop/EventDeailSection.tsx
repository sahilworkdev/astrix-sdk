import React from "react";

const EventDeailSection = ({ styles }: any) => {
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
            }}
          >
            Lorem ipsum
          </p>
        </div>

        <div>
          <h3
            style={{
              color: styles.headingTextColor,
              fontSize: styles.headingTextSize,
              fontWeight: styles.headingTextWeight,
              marginBottom: "5px",
            }}
          >
            Artists
          </h3>
          <div style={{display:"grid" , gridTemplateColumns: 'repeat(2, 1fr)', rowGap: '16px', marginBottom: '16px'}}>
            <div style={{ display: "flex", alignItems: "center"}}>
              <img
                style={{
                  width: styles.profileImageWidth,
                  height: styles.profileImageHeight,
                }}
                src="/vite.svg"
                alt="Artist 1"
              />
              <div style={{display:"flex", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                <span
                  style={{
                    color: styles.artistNameTextColor,
                    fontSize: styles.artistNameTextSize,
                    fontWeight: styles.artistNameTextWeight,
                  }}
                >
                  Artist 1
                </span>
                <span style={{}}>|</span>
                </div>
                <img
                  src="/vite.svg"
                  alt="Spotify"
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
              <img
                style={{
                  width: styles.profileImageWidth,
                  height: styles.profileImageHeight,
                }}
                src="/vite.svg"
                alt="Artist 1"
              />
              <div style={{display:"flex", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                <span
                  style={{
                    color: styles.artistNameTextColor,
                    fontSize: styles.artistNameTextSize,
                    fontWeight: styles.artistNameTextWeight,
                  }}
                >
                  Artist 1
                </span>
                <span style={{}}>|</span>
                </div>
                <img
                  src="/vite.svg"
                  alt="Spotify"
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: styles.profileImageWidth,
                  height: styles.profileImageHeight,
                }}
                src="/vite.svg"
                alt="Artist 1"
              />
              <div style={{display:"flex", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                <span
                  style={{
                    color: styles.artistNameTextColor,
                    fontSize: styles.artistNameTextSize,
                    fontWeight: styles.artistNameTextWeight,
                  }}
                >
                  Artist 1
                </span>
                <span style={{}}>|</span>
                </div>
                <img
                  src="/vite.svg"
                  alt="Spotify"
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: styles.profileImageWidth,
                  height: styles.profileImageHeight,
                }}
                src="/vite.svg"
                alt="Artist 1"
              />
              <div style={{display:"flex", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                <span
                  style={{
                    color: styles.artistNameTextColor,
                    fontSize: styles.artistNameTextSize,
                    fontWeight: styles.artistNameTextWeight,
                  }}
                >
                  Artist 1
                </span>
                <span style={{}}>|</span>
                </div>
                <img
                  src="/vite.svg"
                  alt="Spotify"
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: styles.profileImageWidth,
                  height: styles.profileImageHeight,
                }}
                src="/vite.svg"
                alt="Artist 1"
              />
              <div style={{display:"flex", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                <span
                  style={{
                    color: styles.artistNameTextColor,
                    fontSize: styles.artistNameTextSize,
                    fontWeight: styles.artistNameTextWeight,
                  }}
                >
                  Artist 1
                </span>
                <span style={{}}>|</span>
                </div>
                <img
                  src="/vite.svg"
                  alt="Spotify"
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: styles.profileImageWidth,
                  height: styles.profileImageHeight,
                }}
                src="/vite.svg"
                alt="Artist 2"
              />
              <div style={{display:"flex", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                <span
                  style={{
                    color: styles.artistNameTextColor,
                    fontSize: styles.artistNameTextSize,
                    fontWeight: styles.artistNameTextWeight,
                  }}
                >
                  Artist 2
                </span>
                <span style={{}}>|</span>
                </div>
                <img
                  src="/vite.svg"
                  alt="Spotify"
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>
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
