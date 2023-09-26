"use client";
import { Fragment, ReactNode, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";

type props = {
  children: ReactNode;
};

const ProjectModal = ({ children }: props) => {
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  // const pathname = usePathname();

  // usePathname  useEffect(() => {
  //     if (pathname.match()) {
  //       document.body.style.overflow = "hidden"; // Prevent scrolling
  //     }
  //
  //     // Clean up (optional but recommended)
  //     return () => {
  //       document.body.style.overflow = "auto";
  //     };
  //   }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
      onClick={() => router.back()}
    >
      {/* Backdrop */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 bg-white p-4 max-w-4xl mx-5 md:mx-0"
      >
        {children}
      </div>
    </div>
  );
};

export default ProjectModal;
