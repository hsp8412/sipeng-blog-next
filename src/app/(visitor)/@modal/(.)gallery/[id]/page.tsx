import {notFound} from "next/navigation";
import prisma from "../../../../../../prisma/prisma";
import ImageModal from "@/app/components/gallery/imageModal";
import PhotoDetails from "@/app/components/gallery/photoDetail";

export const dynamic = "force-dynamic";

interface PhotoModalPageProps {
  params: Promise<{
    id: string;
  }>;
}

const fetchPhoto = async (id: string) => {
  return prisma.photo.findUnique({
    where: {
      id: id,
    },
  });
};

const PhotoModalPage = async (props: PhotoModalPageProps) => {
  const params = await props.params;
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
