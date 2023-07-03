import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HeroButton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-white font-bold border-2 px-2 py-2 hover:bg-indigo-600 transition-all duration-300 ease-in">
      {children}
      <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
    </div>
  );
};

export default HeroButton;
