import React from "react";
import PhotoList from "@/app/components/gallery/photoList";

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <div className="bg-gray-200">
      <PhotoList />
    </div>
  );
};

export default Page;
