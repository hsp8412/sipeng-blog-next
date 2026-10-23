import React from "react";
import {Post} from ".prisma/client";
import {act} from "react-dom/test-utils";
import _ from "lodash";

type Props = {
  posts: Post[];
  activeFilter: string;
  setFilter: (filter: string) => void;
};
const PostsFilter = ({posts, activeFilter, setFilter}: Props) => {
  let tags = posts.map((post) => post.tags).flat();
  tags = _.uniq(tags);
  return (
    <div className="w-full flex px-4 py-4 shadow bg-white mt-5 md:mt-0 xl:mt-5 md:ms-5 xl:ms-0 items-center">
      <div className={"flex flex-wrap gap-2 font-light"}>
        {tags.map((tag) => (
          <div
            key={`tag-${tag}`}
            className={`px-2 py-1 ${
              activeFilter === tag ? "bg-blue-800" : "bg-sky-600"
            } hover:bg-blue-800 text-white rounded-md cursor-pointer transition-colors duration-400 ease-in-out`}
            onClick={() => {
              setFilter(tag);
            }}
          >
            {tag}
          </div>
        ))}
        <div
          className={`px-2 py-1 bg-blue-800 text-white rounded-md cursor-pointer hover:bg-sky-600 transition-colors`}
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
