"use client";
import React, { useEffect, useState } from "react";
import Typist from "react-typist-component";

type props = {
  children: React.ReactNode;
  delay: number;
};

const TypeText = ({ children, delay }: props) => {
  // const [displayText, setDisplayText] = useState("");
  // useEffect(() => {
  //   const typeText = (i: number) => {
  //     console.log(i);
  //     if (i < text.length) {
  //       setTimeout(() => {
  //         setDisplayText((prevText) => prevText + text.charAt(i));
  //         typeText(i + 1);
  //       }, delay);
  //     }
  //   };
  //   typeText(0);
  // }, [text, delay]);
  //
  // return (
  //   <div className="text-white md:text-6xl text-3xl text-center font-bold">
  //     {displayText}
  //   </div>
  // );
  return (
    <Typist typingDelay={delay} cursor={<span className="cursor"></span>}>
      {children}
    </Typist>
  );
};

export default TypeText;
