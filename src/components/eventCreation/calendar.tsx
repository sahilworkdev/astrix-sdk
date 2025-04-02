import React from "react";
import {
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  eachDayOfInterval,
  format,
  getDay,
  isSameDay,
} from "date-fns";
// import Dropdown from "./Dropdown";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Dropdown from "./dropdown";

type CalendarProps = {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date | null;
};

export default function Calendar({
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
}: CalendarProps) {
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [monthDate, setMonthDate] = useState<Date>(selectedDate);
  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "long" })
  );
  const years = Array.from({ length: 11 }, (_, i) => (new Date().getFullYear() + i).toString());
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(monthDate),
    end: endOfMonth(monthDate),
  });
  const firstDayIndex = getDay(startOfMonth(monthDate));

  const handleMonthDateChange = (newDate: Date) => {
    const updatedDate = new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate(),
      selectedDate.getHours(),
      selectedDate.getMinutes()
    );
    onDateChange(updatedDate);
    setMonthDate(updatedDate);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => handleMonthDateChange(subMonths(monthDate, 1))}>
        <FaChevronLeft style={{color:"b0e681"}}/>
        </button>
        <select
          value={format(monthDate, "MMMM")}
          onChange={(e) => handleMonthDateChange(new Date(monthDate.getFullYear(), months.indexOf(e.target.value), monthDate.getDate()))}
        >
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
        <select
          value={monthDate.getFullYear()}
          onChange={(e) => handleMonthDateChange(new Date(parseInt(e.target.value), monthDate.getMonth(), monthDate.getDate()))}
        >
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <button onClick={() => handleMonthDateChange(addMonths(monthDate, 1))}>
        <FaChevronRight style={{color:"b0e681"}}/>
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
          justifyItems: "center",
        }}
      >
        {weeks.map((day) => (
          <div
            key={day}
            style={{ fontSize: "12px", color: "white", textAlign: "center" }}
          >
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayIndex }).map((_, i) => (
          <div key={`empty-${i}`} style={{ visibility: "hidden" }}></div>
        ))}
        {daysInMonth.map((day) => (
          <button
            key={day.toISOString()}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              color: "white",
              background: isSameDay(day, selectedDate) ? "#B0E681" : "none",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onClick={() => onDateChange(day)}
            onMouseOver={(e) => (e.currentTarget.style.background = "#768293")}
            onMouseOut={(e) =>
              (e.currentTarget.style.background = isSameDay(day, selectedDate)
                ? "#B0E681"
                : "none")
            }
          >
            {format(day, "d")}
          </button>
        ))}
      </div>
    </div>
  );
}
