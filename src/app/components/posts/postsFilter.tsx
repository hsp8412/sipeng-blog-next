import React from "react";
import { Post } from ".prisma/client";
import { act } from "react-dom/test-utils";
import _ from "lodash";

type Props = {
  posts: Post[];
  activeFilter: string;
  setFilter: (filter: string) => void;
};
const PostsFilter = ({ posts, activeFilter, setFilter }: Props) => {
  let tags = posts.map((post) => post.tags).flat();
  tags = _.uniq(tags);
  return (
    <div className="w-full flex px-4 py-4 shadow bg-white mt-5 md:mt-0 xl:mt-5 md:ms-5 xl:ms-0 items-center">
      <div className={"flex flex-wrap gap-2"}>
        {tags.map((tag) => (
          <div
            key={`tag-${tag}`}
            className={`px-2 py-1 ${
              activeFilter === tag ? "bg-indigo-500" : "bg-teal-500"
            } hover:bg-indigo-500 text-white rounded-2xl cursor-pointer`}
            onClick={() => {
              setFilter(tag);
            }}
          >
            {tag}
          </div>
        ))}
        <div
          className={`px-2 py-1 bg-indigo-500 text-white rounded-2xl cursor-pointer hover:bg-teal-500`}
          onClick={() => {
            setFilter("");
          }}
        >
          Clear Filter
        </div>
      </div>
    </div>
  );
};

export default PostsFilter;
