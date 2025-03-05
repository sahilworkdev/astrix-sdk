import React, { useState, useRef } from "react";
import styles from "./otp-input.module.css";
interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    if (!/^\d+$/.test(pasteData)) return;
    const newOtp = pasteData
      .split("")
      .concat(Array(length - pasteData.length).fill(""));
    setOtp(newOtp);
    newOtp.forEach((digit, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]!.value = digit;
      }
    });
    inputRefs.current[Math.min(pasteData.length, length - 1)]?.focus();
    if (newOtp.every((val) => val !== "")) onComplete?.(newOtp.join(""));
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={styles.otp_wrapper}>
      <div className={styles.centered}>
        {otp.map((digit, index) => (
          <input
            className={styles.otp_input}
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el as HTMLInputElement | null;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
