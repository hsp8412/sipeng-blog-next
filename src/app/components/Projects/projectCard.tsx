import React from "react";
import { Project } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
  project: Project;
  onClick: (project: Project) => void;
};

const renderLinkIcon = (linkName: string) => {
  if (linkName === "GitHub") {
    return (
      <FontAwesomeIcon
        icon={faGithubSquare}
        size={"2x"}
        className={
          "text-neutral-700 hover:text-indigo-500 transition-colors duration-100 ease-out"
        }
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={faSquareUpRight}
        size={"2x"}
        className={
          "text-neutral-700 hover:text-indigo-500 transition-colors duration-200 ease-in"
        }
      />
    );
  }
};

const renderLinks = (project: Project) => {
  if (!project.link1 && !project.link2) {
    return;
  }
  if (project.link1 && project.linkName1 && !project.link2) {
    return (
      <div className="mt-4 flex justify-center md:justify-start">
        <Link href={project.link1} target={"_blank"}>
          {renderLinkIcon(project.linkName1)}
        </Link>
      </div>
    );
  } else if (
    project.link1 &&
    project.link2 &&
    project.linkName1 &&
    project.linkName2
  )
    return (
      <div className="mt-4 flex justify-center md:justify-start">
        <Link href={project.link1} target={"_blank"}>
          {renderLinkIcon(project.linkName1)}
        </Link>
        <Link href={project.link2} className={"ms-2"} target={"_blank"}>
          {renderLinkIcon(project.linkName2)}
        </Link>
      </div>
    );
};

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <div
      className="project-card w-10/12 rounded-2xl shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in "
      onClick={() => {
        onClick(project);
      }}
    >
      <div className="card-image w-full">
        <img
          src={project.image ? project.image : "/default.jpeg"}
          alt=""
          width={1000}
          height={0}
          className="w-full rounded-t-2xl"
        />
      </div>
      <div className="card-content px-5 py-5 flex flex-col">
        <div className="text-center md:text-start font-bold text-2xl text-neutral-700">
          {project.name}
        </div>
        <div
          className={
            "flex flex-wrap justify-center md:justify-start gap-2 mt-5 "
          }
        >
          {project.tags.map((tag) => (
            <div
              className="px-1 py-1 bg-indigo-600 text-white font-bold rounded hover:scale-105 transition-all duration-200 ease-in"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
        {renderLinks(project)}
      </div>
    </div>
  );
};

export default ProjectCard;
