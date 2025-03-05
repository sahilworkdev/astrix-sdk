import React, { useCallback, useEffect, useRef, useState } from "react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import { useTheme } from "../../../providers/ThemeProvider";
import _ from "lodash";
import LandingEventCard from "./LandingEventCard";
import { getPastEvents } from "../../../backendServices";
import { useAuth } from "../../../providers/AuthProvider";

export default function PastEventCarousel() {
  const [pastEvents, setPastEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { token } = useAuth();
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const fetchPastEvents = async () => {
    try {
      setIsLoading(true);
      const response = await getPastEvents(token);
      setPastEvents(response.data);
      console.log(">>>>>>>>>>>>>>>", pastEvents);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = useCallback(
    _.throttle((event: any, type: "upcoming" | "past" = "upcoming") => {
      event.preventDefault();

      const target = event.target as HTMLDivElement;
      const scrollLeft = target.scrollLeft;

      const scrollWidth = target.scrollWidth;

      const clientWidth = target.clientWidth;

      const buffer = 450;

      if (scrollLeft + clientWidth >= scrollWidth - buffer) {
        fetchPastEvents();
      }
    }, 500),
    [pastEvents, isLoading]
  );

  const handlemove = (direction: "left" | "right", DivRef: any) => {
    if (DivRef.current) {
      const scrollAmount = 300;
      const currentScrollPosition = DivRef.current.scrollLeft;

      DivRef.current.scrollTo({
        left:
          direction === "left"
            ? currentScrollPosition - scrollAmount
            : currentScrollPosition + scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const { accentColor } = useTheme();

  useEffect(() => {
    fetchPastEvents();
  }, []);
  return (
    <div style={{ height: "450px", marginTop: "4px" }}>
      <div style={{ height: "100%", overflow: "hidden", position: "relative" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            gap: "1px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: "200",
                paddingLeft: "2px",
                color: "#AFB6C0",
                fontFamily: "Mulish",
                marginBottom: "1px",
              }}
            >
              Past Events
            </p>
            {pastEvents?.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <button onClick={() => handlemove("left", carouselRef)}>
                  <LuCircleChevronLeft
                    size={35}
                    style={{
                      color: `${accentColor}`,
                    }}
                  />
                </button>
                <button onClick={() => handlemove("right", carouselRef)}>
                  <LuCircleChevronRight
                    size={35}
                    style={{
                      color: `${accentColor}`,
                    }}
                  />
                </button>
              </div>
            )}
          </div>

          <div>
            {pastEvents?.length === 0 && !isLoading && (
              <p style={{ textAlign: "center", color: "#6B7280" }}>
                No Past events found!
              </p>
            )}
            <div
              style={{
                display: "inline-flex",
                overflowX: "auto",
                height: "100%",
                width: "100%",
                alignItems: "center",
                gap: "30px",
              }}
              onScroll={(e) => {
                handleScroll(e, "past");
              }}
              ref={carouselRef}
              id="scrollable-div"
            >
              {pastEvents?.map((event: any, index) => (
               <div key={index} style={{ maxWidth: "380px", minWidth: "350px", aspectRatio: "1/1", height: "100%" }}>
                 <LandingEventCard item={event} key={index} />
               </div>
              ))}
              {hasMore &&
                new Array(isLoading ? 4 : pastEvents?.length > 4 ? 2 : 0)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      style={{
                        maxWidth: "30%",
                        minWidth: "30%",
                        aspectRatio: "1/1",
                        height: "100%",
                      }}
                    >
                      Loading...
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
