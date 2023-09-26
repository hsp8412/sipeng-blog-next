import React from "react";
import Ellipsis from "react-ellipsis-component";
import { Post } from ".prisma/client";

type Props = {
  post: Post;
  setActiveFilter: (tag: string) => void;
};

const PostCard = ({ post, setActiveFilter }: Props) => {
  return (
    <div className="card post-card h-full rounded shadow bg-white hover:shadow-xl transition-shadow duration-600 ease-in">
      <img
        className="card-img-top rounded"
        src={post.coverImage ?? "default.jpeg"}
        alt="post-cover"
      />
      <div className="card-body px-3 py-4">
        <a href={`/posts/${post.id}`} className="post-title-link">
          <p className="card-title text-2xl font-bold text-blue-500">
            {post.title}
          </p>
        </a>
        <p className={'className="post-preview my-2 text-neutral-600"'}>
          {post.description}
        </p>
        <a
          href={`/posts/${post.id}`}
          className="post-link hover:underline text-neutral-600"
        >
          Read more
        </a>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <button
              className="post-tag px-1 rounded bg-teal-500 text-white font-light hover:scale-105"
              onClick={() => setActiveFilter(tag)}
              key={index}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
