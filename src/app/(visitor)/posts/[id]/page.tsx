import React from "react";
import prisma from "../../../../../prisma/prisma";
import InfoCard from "@/app/components/posts/infoCard";
import PostContent from "@/app/components/posts/postContent";
import PostComment from "@/app/components/posts/postComment";

export const revalidate = 300;

const fetchPost = async (id: string) => {
  return prisma.post.findUnique({
    where: {
      id: id,
    },
  });
};

const Page = async (props: {params: Promise<{id: string}>}) => {
  const params = await props.params;
  const post = await fetchPost(params.id);
  return (
    <div className={"bg-gray-200"}>
      <div className="flex flex-col lg:flex-row py-5 px-5 lg:px-14 max-w-screen-2xl mx-auto">
        <div className={"hidden lg:block w-3/12 px-5"}>
          <InfoCard />
        </div>
        <div className={"w-full lg:w-9/12"}>
          <PostContent post={post} />
          <PostComment />
        </div>
      </div>
    </div>
  );
};

export default Page;
