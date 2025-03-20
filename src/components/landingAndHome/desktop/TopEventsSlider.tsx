import React, { useEffect, useRef, useState } from "react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import { useTheme } from "../../../providers/ThemeProvider";
import _ from "lodash";
import { getLiveEvents } from "../../../backendServices";
import { useAuth } from "../../../providers/AuthProvider";
import TopEventBanner from "./TopEventBanner";

interface TopEventsSliderProps {
  type: string;
  showArrows: boolean;
}

export default function TopEventsSlider({
  type = "desktop",
  showArrows = true,
}: TopEventsSliderProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [reset, setReset] = useState(false);
  const { accentColor } = useTheme();
  const { token } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [topEvents, setTopEvents] = useState([]);

  const handleNext = () => {
    setReset(true);
    setCurrentIndex((prevIndex) =>
      Math.min((prevIndex + 1) % topEvents.length, topEvents.length - 1)
    );
  };

  const handlePrev = () => {
    setReset(true);
    setCurrentIndex((prevIndex) =>
      Math.max((prevIndex - 1 + topEvents.length) % topEvents.length, 0)
    );
  };

  const handleDotClick = (index: number) => {
    setReset(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const loop = () => {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          Math.min((prevIndex + 1) % topEvents.length, topEvents.length - 1)
        );
      }, 3000);
    };

    if (reset) {
      clearInterval(interval!);
      setReset(false);
    }
    if (topEvents.length > 0) {
      loop();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [reset, topEvents.length]);

  const fetchLiveEvents = async () => {
    try {
      setLoading(true);
      const response = await getLiveEvents(token);
      setTopEvents(response.data);
      console.log("Live >>>>>>>>>>>>>>>", response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveEvents();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef?.current) {
        setItemWidth(carouselRef?.current?.getBoundingClientRect()?.width || 0);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflowX: "hidden",
        width: "100%",
        paddingBottom: "20px",
      }}
      ref={carouselRef}
    >
      {showArrows && (
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: 0,
            zIndex: 50,
            top: "45%",
                 backgroundColor: "transparent",
            border:"none"
          }}
        >
          <LuCircleChevronLeft stroke="#E8EAED" size={20} />
        </button>
      )}
      <div
        style={{
          display: "flex",
          transition: "transform 500ms ease-in-out",
          transform: `translateX(-${currentIndex * itemWidth}px)`,
          width: `${itemWidth * topEvents.length}px`,
        }}
      >
        {topEvents?.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              width: "100%",
              maxWidth: `${itemWidth}px`,
            }}
          >
            <TopEventBanner item={item} />
          </div>
        ))}
      </div>
      {showArrows && (
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            zIndex: 50,
            right: 0,
            top: "45%",
            backgroundColor: "transparent",
            border:"none"
          }}
        >
          <LuCircleChevronRight stroke="#E8EAED" size={20} />
        </button>
      )}
      {/* Dots navigation */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          paddingTop: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 20,
        }}
      >
        {topEvents.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: "12px",
              height: "12px",
              border: `1px solid ${accentColor}`,
              borderRadius: "50%",
              backgroundColor:
                currentIndex === index ? accentColor : "rgba(20, 25, 31, 0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
