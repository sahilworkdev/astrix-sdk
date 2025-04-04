import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ArrowProps {
  color?: string;
  size?: string;
}

const Arrow = ({
  color = "black",
  size = "24px"
}: ArrowProps) => {
  return (
    <div>
      <IoIosArrowDown
        style={{ color:color , fontSize:size }}
      />
    </div>
  );
};

export default Arrow;
