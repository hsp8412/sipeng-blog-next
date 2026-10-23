import React from "react";
import prisma from "../../../../prisma/prisma";
import ProjectsList from "@/app/components/Projects/projectsList";
import projectsList from "@/app/components/Projects/projectsList";

export const revalidate = 300;

const Page = async () => {
  const projects = await prisma.project.findMany();
  return (
    <div className={"bg-gray-200"}>
      <div
        className={"px-10 py-5 flex justify-center max-w-screen-2xl mx-auto"}
      >
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
};

export default Page;
