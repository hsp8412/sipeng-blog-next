"use client";
import React from "react";
import { Utterances } from "utterances-react-component";

const PostComment = () => {
  return (
    <div className="w-full xl:w-9/12 mt-10">
      <Utterances
        repo="hsp8412/utterances-comments"
        theme="github-light"
        issueTerm="pathname"
        react-utterances
      />
    </div>
  );
};

export default PostComment;
