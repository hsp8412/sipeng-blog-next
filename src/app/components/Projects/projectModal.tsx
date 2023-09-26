import { Dispatch, Fragment, SetStateAction, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faResearchgate } from "@fortawesome/free-brands-svg-icons/faResearchgate";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { Project } from "@prisma/client";

type props = {
  project: Project | undefined;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const renderLink = (name: string, url: string) => {
  let icon;
  switch (name) {
    case "LinkedIn":
      icon = faLinkedinIn;
      break;
    case "UCalgary Profile":
      icon = faBuildingColumns;
      break;
    case "GitHub":
      icon = faGithub;
      break;
    case "Twitter":
      icon = faTwitter;
      break;
    case "Google Scholar":
      icon = faGoogle;
      break;
    case "ResearchGate":
      icon = faResearchgate;
      break;
    case "PubMed":
      icon = faBookOpen;
      break;
    default:
      icon = faArrowUpRightFromSquare;
  }
  return (
    <div className="flex justify-center mb-1 items-center">
      <FontAwesomeIcon icon={icon} className="dark:text-white" />
      <a
        className="personal-link text-secondary outline-0 text-base mx-1 hover:text-tertiary"
        href={url}
        target="_blank"
      >
        {name}
      </a>
    </div>
  );
};

const ProjectModal = ({ project, open, setOpen }: props) => {
  const cancelButtonRef = useRef(null);

  if (!project) return <></>;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl md:max-w-xl lg:max-w-4xl">
                <button
                  type="button"
                  className="absolute w-10 h-10 top-4 right-4 p-2 rounded-full focus:outline-none hover:bg-gray-300"
                  onClick={() => setOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="h-6 w-6 text-gray-500"
                  />
                </button>
                <div className="bg-white dark:bg-neutral-800 px-4 pb-4 pt-4 sm:p-6 sm:pb-4">
                  <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="lg:w-3/12 lg:mr-4 flex flex-col justify-center lg:justify-start items-center">
                      <img
                        src={project.image ? project.image : "/default.jpeg"}
                        alt="project-image"
                        height={160}
                        width={160}
                        className=""
                      />
                      <div className="mt-2 hidden lg:inline-block">
                        {project.linkName1 && project.link1
                          ? renderLink(project.linkName1, project.link1)
                          : null}
                        {project.linkName2 && project.link2
                          ? renderLink(project.linkName2, project.link2)
                          : null}
                      </div>
                    </div>
                    <div className="lg:w-9/12 flex flex-col items-center lg:items-start mt-3 lg:mt-0">
                      <div className="flex">
                        <p className="text-center md:text-start md:text-2xl text-indigo-600 mb-3 font-bold mr-2 text-xl dark:text-white">
                          {project.name}
                        </p>
                      </div>
                      <p className="px-3 pb-3 lg:px-0 text-center lg:text-left dark:text-white">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-2 lg:hidden flex justify-center gap-4">
                      {project.linkName1 && project.link1
                        ? renderLink(project.linkName1, project.link1)
                        : null}
                      {project.linkName2 && project.link2
                        ? renderLink(project.linkName2, project.link2)
                        : null}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProjectModal;
