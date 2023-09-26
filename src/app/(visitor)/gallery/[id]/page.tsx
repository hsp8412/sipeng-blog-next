import prisma from "../../../../../prisma/prisma";
import { notFound } from "next/navigation";
import ImageModal from "@/app/components/gallery/imageModal";
import PhotoDetails from "@/app/components/gallery/photoDetail";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

const fetchPhoto = async (id: string) => {
  return prisma.photo.findUnique({
    where: {
      id: id,
    },
  });
};

const PhotoPage = async ({ params }: PhotoModalPageProps) => {
  const photo = await fetchPhoto(params.id);

  if (!photo) {
    return notFound();
  }

  return (
    <div className="px-10 py-10">
      <PhotoDetails photo={photo} />
    </div>
  );
};

export default PhotoPage;
