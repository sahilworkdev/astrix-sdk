import React, { ReactElement, useCallback, useRef } from "react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import { useTheme } from "../../../providers/ThemeProvider";
import _ from "lodash";

interface EventCarouselProps {
  events: any[];
  isLoading: boolean;
  onScroll: () => void;
  hasMore: boolean;
  card: (item: any, index: number) => React.ReactNode;
  cardSkeleton: ReactElement;
  title: string;
}

export default function EventCarousel({
  events,
  isLoading,
  onScroll,
  hasMore,
  card,
  cardSkeleton,
  title,
}: EventCarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(
    _.throttle((event: any, type: "upcoming" | "past" = "upcoming") => {
      event.preventDefault();

      const target = event.target as HTMLDivElement;
      const scrollLeft = target.scrollLeft;

      const scrollWidth = target.scrollWidth;

      const clientWidth = target.clientWidth;

      const buffer = 450;

      if (scrollLeft + clientWidth >= scrollWidth - buffer) {
        onScroll();
      }
    }, 500),
    [events, isLoading]
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
              {title}
            </p>
            {events?.length > 0 && (
              <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2px"}}
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

          <div style={{ height: "100%" }}>
            {events?.length === 0 && !isLoading && (
              <p style={{ textAlign: "center", color: "#6B7280" }}>
                No events found!
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
              {events?.map((event: any, index) => (
             
                  <div
                   key={index} style={{ maxWidth: "380px", minWidth: "350px", aspectRatio: "1/1", height: "100%" }}
                  >
                    {card(event, index)}
                  </div>
              
              ))}
              {hasMore &&
                new Array(isLoading ? 4 : events?.length > 4 ? 2 : 0)
                  .fill("")
                  .map((_, index) => (
                    <div
                    key={index}
                    style={{
                      maxWidth: "380px",
                      minWidth: "350px",
                      aspectRatio: "1/1",
                      height: "100%",
                    }}
                  >
                    {cardSkeleton}
                  </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
