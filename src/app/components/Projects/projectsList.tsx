"use client";
import React, { useState } from "react";
import { Project } from "@prisma/client";
import ProjectCard from "@/app/components/Projects/projectCard";
import ProjectModal from "@/app/components/Projects/projectModal";
type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  const [projectToDisplay, setProjectToDisplay] = useState<Project>();
  const [modalOpen, setModalOpen] = useState(false);
  const handleCardClick = (project: Project) => {
    setProjectToDisplay(project);
    setModalOpen(true);
  };
  return (
    <div
      className={"columns-1 md:columns-2 xl:columns-3 gap-5"}
      // className={
      //   "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 grid-flow-dense"
      // }
    >
      {projects.map((project, index) => (
        <div
          className={`grid-cell flex justify-center items-start break-inside-avoid ${
            index !== 0 && "mt-5"
          }`}
          key={project.id}
        >
          <ProjectCard
            project={project}
            key={project.id}
            onClick={handleCardClick}
          />
        </div>
      ))}
      <ProjectModal
        project={projectToDisplay}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </div>
  );
};

export default ProjectsList;
