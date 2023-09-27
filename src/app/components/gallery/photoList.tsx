import React from "react";
import prisma from "../../../../prisma/prisma";
import Link from "next/link";

const fetchPhotos = async () => {
  return prisma.photo.findMany();
};

const PhotoList = async () => {
  const photos = await fetchPhotos();
  return (
    <div className="px-5 py-10 columns-1 md:columns-2 xl:columns-3 gap-5">
      {photos.map((photo, index) => (
        <Link key={photo.id} href={`/gallery/${photo.id}`} scroll={false}>
          <div className={`${index !== 0 && "mt-5"}`}>
            {
              <img
                src={photo.url}
                alt={photo.name}
                className={
                  "hover:scale-105 transition-all duration-500 rounded object-cover"
                }
              />
            }
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PhotoList;
