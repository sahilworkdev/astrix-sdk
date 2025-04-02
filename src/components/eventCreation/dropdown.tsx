import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  placeholder?: string;
}

export default function Dropdown({
  options,
  onSelect,
  placeholder = "Select an option",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={styles.container}>
      <div style={styles.dropdown} onClick={toggleDropdown}>
        <span>{selected || placeholder}</span>
        <span style={styles.arrow}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {isOpen && (
        <div style={styles.menu}>
          {options.map((option, index) => (
            <div
              key={index}
              style={styles.item}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    color: "#fff",
  },
  dropdown: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #1F1F1F",
    borderRadius: "12px",
    cursor: "pointer",
    backgroundColor: "#1F1F1F99",
  },
  arrow: {
    fontSize: "14px",
  },
  menu: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "#1F1F1F99",
    border: "1px solid #1F1F1F",
    borderRadius: "12px",
    marginTop: "5px",
    zIndex: 10,
  },
  item: {
    padding: "10px",
    cursor: "pointer",
  },
};
