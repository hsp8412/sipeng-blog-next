"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleResize = () => {
      // If the window width is larger than 768px (md in Tailwind)
      if (window.innerWidth > 768) {
        setShowMenu(false); // Close the menu
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderMenuIcon = () => {
    if (!showMenu) return <FontAwesomeIcon icon={faBars} size="2x" />;
    return <FontAwesomeIcon icon={faXmark} size="2x" />;
  };

  const navItems = [
    { label: "Posts", link: "/posts" },
    { label: "Projects", link: "/projects" },
    { label: "Gallery", link: "/gallery" },
    { label: "Contact", link: "/contact" },
  ];

  // if (pathName === "/") {
  return (
    <div>
      <nav
        className={`flex relative h-[80px] items-center justify-center md:justify-start px-10 ${
          pathName === "/"
            ? "bg-transparent z-[2] text-white"
            : "text-black bg-white z-[10]"
        }`}
      >
        <Link className="md:me-10" href="/">
          <FontAwesomeIcon icon={faEarthAsia} size="2x" />
        </Link>
        <ul
          className={`${
            showMenu ? "left-0 z-10 bg-white" : "left-[-100%]"
          } top-[80px] flex flex-col w-full absolute transition-all ease-in md:static md:flex-row md:h-full md:border-0 md:bg-transparent`}
        >
          {navItems.map((item) => (
            <li
              key={item.label}
              onClick={toggleShowMenu}
              className="flex items-center md:mx-2 border-1 md:border-0"
            >
              <Link
                href={item.link}
                className={`text-center w-full table hover:bg-gray-100 hover:text-black text-black ${
                  pathName === "/" ? "md:text-white" : "md:text-black"
                } transition-all ease-in-out duration-200 rounded-0 font-bold text-2xl px-3 py-2 md:hover:rounded-3xl`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="flex items-center absolute transform translate-x-full h-full left-0 top-0 md:hidden"
          onClick={toggleShowMenu}
        >
          <div className="">{renderMenuIcon()}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
