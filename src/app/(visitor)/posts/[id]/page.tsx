import React from "react";
import prisma from "../../../../../prisma/prisma";
import InfoCard from "@/app/components/posts/infoCard";
import PostContent from "@/app/components/posts/postContent";
import { Utterances } from "utterances-react-component";
import PostComment from "@/app/components/posts/postComment";

const fetchPost = async (id: string) => {
  return prisma.post.findUnique({
    where: {
      id: id,
    },
  });
};

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPost(params.id);
  return (
    <div className="flex flex-col lg:flex-row py-5 px-5 lg:px-14 bg-gray-200 w-full">
      <div className={"w-full lg:w-9/12"}>
        <PostContent post={post} />
        <PostComment />
      </div>
      <div className={"lg:w-3/12 flex justify-center mb-auto"}>
        <InfoCard />
      </div>
    </div>
  );
};

export default Page;
