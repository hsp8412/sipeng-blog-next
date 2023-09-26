import React from "react";
import prisma from "../../../../prisma/prisma";
import ProjectsList from "@/app/components/Projects/projectsList";
import projectsList from "@/app/components/Projects/projectsList";

const Page = async () => {
  const projects = await prisma.project.findMany();
  return (
    <div className={"bg-gray-200 md:px-10 py-10 flex justify-center"}>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default Page;
