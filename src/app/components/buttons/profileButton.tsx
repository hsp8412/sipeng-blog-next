import React, { ReactNode } from "react";

const DownloadButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="px-2 py-2 border-4 font-bold text-2xl rounded-xl border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition:all duration-200 ease-in">
      {children}
    </button>
  );
};

export default DownloadButton;
