"use client";
import React, { useEffect, useState } from "react";

type props = {
  text: string;
  delay: number;
};

const TypeText = ({ text, delay }: props) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    const typeText = (i: number) => {
      if (i < text.length) {
        setTimeout(() => {
          setDisplayText((prevText) => prevText + text.charAt(i));
          typeText(i + 1);
        }, delay);
      }
    };
    typeText(0);
  }, [text, delay]);

  return (
    <div className="text-white md:text-6xl text-3xl text-center font-bold">
      {displayText}
    </div>
  );
};

export default TypeText;
