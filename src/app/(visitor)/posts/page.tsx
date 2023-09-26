import React from "react";
import PostsList from "@/app/components/posts/postsList";
import prisma from "../../../../prisma/prisma";

const fetchPosts = async () => {
  return prisma.post.findMany();
};

const Page = async () => {
  const posts = await fetchPosts();
  return (
    <div className={"bg-gray-200"}>
      <PostsList posts={posts} />
    </div>
  );
};

export default Page;
