import React from "react";
import { Post } from ".prisma/client";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";

type Props = {
  post: Post | null;
};

const PostContent = ({ post }: Props) => {
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="post-title text-5xl font-bold text-center md:text-start">
        {post.title}
      </h1>
      <br />
      <div className="flex justify-center md:justify-start mt-2">
        <img
          src={"/avatar.jpg"}
          alt="avatar"
          className="post-avatar w-20 rounded-full"
        />
        <div className="flex flex-col items-start justify-center ms-5 gap-3">
          <p className=" post-info-author text-2xl md:text-3xl font-semibold text-indigo-500">
            {"Sipeng He"}
          </p>
          <p className="post-info-date text-xl font-light">
            {dayjs(post.createdAt).format("ddd MMM DD YYYY")}
          </p>
        </div>
      </div>
      <ReactMarkdown className="mt-5 post-content text-start">
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export default PostContent;
