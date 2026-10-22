import React, {ReactNode} from "react";

const DownloadButton = ({children}: {children: ReactNode}) => {
  return (
    <button className="px-2 py-2 border-4 font-bold text-2xl rounded-xl border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition:all duration-200 ease-in">
      {children}
    </button>
  );
};

export default DownloadButton;
