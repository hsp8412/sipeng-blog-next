"use client";
import React from "react";
import {Post} from ".prisma/client";
import PostCard from "@/app/components/posts/postCard";
import InfoCard from "@/app/components/posts/infoCard";
import _ from "lodash";
import Pagination from "@/app/components/pagination/pagination";
import PostsFilter from "@/app/components/posts/postsFilter";

type Props = {
  posts: Post[];
};
const PostsList = ({posts}: Props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (filter: string) => {
    setCurrentPage(1);
    console.log(currentPage);
    setFilter(filter);
  };

  let filtered = [...posts];
  if (filter) {
    filtered = posts.filter((post) => {
      for (let tag of post.tags) {
        if (tag.toLowerCase().includes(filter.toLowerCase())) {
          return true;
        }
      }
    });
  }

  const itemsPerPage = 6;
  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  console.log(filtered);
  console.log(currentPage);
  const paginated = _.chunk(filtered, itemsPerPage)[currentPage - 1];
  console.log(paginated);

  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-start my-5 max-w-screen-2xl mx-auto">
        <div className="xl:w-3/12 flex flex-col md:flex-row xl:flex-col px-5 xl:pe-0 mb-5 xl:mb-0">
          <InfoCard />
          <PostsFilter
            posts={posts}
            activeFilter={filter}
            setFilter={handleFilterChange}
          />
        </div>
        <div className={"xl:w-9/12"}>
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-5">
            {paginated.map((post, index) => (
              <div className="h-full" key={post.id}>
                <PostCard
                  key={post.id}
                  post={post}
                  setActiveFilter={(filter) => {
                    handleFilterChange(filter);
                  }}
                />
              </div>
            ))}
          </div>
          <div className={"mt-5 flex justify-center"}>
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsList;
