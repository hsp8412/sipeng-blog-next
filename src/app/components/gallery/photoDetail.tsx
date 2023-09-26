import Image from "next/image";
import type { FC } from "react";
import { Photo } from ".prisma/client";

interface Props {
  photo: Photo;
}

const PhotoDetails: FC<Props> = ({ photo }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="flex justify-start lg:justify-center w-full xl:w-auto">
        <img
          src={photo.url}
          alt={photo.name}
          className="max-h-[calc(100vh-200px)] lg:max-h-[calc(100vh-70px)] object-contain"
        />
      </div>
      <div className="flex flex-col items-start w-full h-full lg:w-[250px] p-2 mb-auto">
        <h3 className="text-xl font-semibold text-gray-800">{photo.name}</h3>
        <h3 className="my-2 font-semibold text-gray-600">@{photo.location}</h3>
        <h4 className="font-normal text-gray-600">{photo.description}</h4>
      </div>
    </div>
  );
};

export default PhotoDetails;
