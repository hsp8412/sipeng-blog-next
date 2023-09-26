import { notFound } from "next/navigation";
import prisma from "../../../../../../prisma/prisma";
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

const PhotoModalPage = async ({ params }: PhotoModalPageProps) => {
  const photo = await fetchPhoto(params.id);

  if (!photo) {
    return notFound();
  }

  return (
    <ImageModal>
      <PhotoDetails photo={photo} />
    </ImageModal>
  );
};

export default PhotoModalPage;
