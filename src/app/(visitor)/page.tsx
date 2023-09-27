import React from "react";
import TypeText from "@/app/components/typeText";
import HeroButton from "@/app/components/buttons/heroButton";
import SocialIcons from "@/app/components/socialIcons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faLocationDot,
  faPersonBiking,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { maShanZheng } from "@/app/fonts";
import ProfileButton from "@/app/components/buttons/profileButton";

const canadaFlag = "\uD83C\uDDE8\uD83C\uDDE6";
const chinaFlag = "\uD83C\uDDE8\uD83C\uDDF3";

const Page = () => {
  return (
    <div className="">
      <header className="header-banner relative bg-fixed bg-header bg-center bg-no-repeat bg-cover h-screen relative mt-[-80px] z-[1]">
        <div className="header-content flex flex-col justify-items-center items-center py-[80px] px-5 h-full">
          <h1 className="text-white text-2xl md:text-3xl mt-20 md:mt-36 text-indigo-500 font-bold">
            Hello World
          </h1>
          <div className="mt-4 h-[36px] md:h-[60px]">
            <TypeText delay={75}>
              <p className="text-white md:text-6xl text-3xl text-center font-bold">
                I am Sipeng He
              </p>
            </TypeText>
          </div>
          <h1 className="mt-6 text-white text-xl text-center">
            Computer Science Student | Developer
          </h1>
          <a className="mt-6" href="#about">
            <HeroButton>More about me</HeroButton>
          </a>
          <div className="mt-auto">
            <SocialIcons />
          </div>
        </div>
      </header>
      <section id="about" className="bg-neutral-100 px-5 py-10">
        <h2 className="text-center text-4xl text-indigo-500 font-semibold">
          About me
        </h2>
        <div className="my-3 w-full flex justify-center">
          <div className="w-3/4 sm:w-1/2 lg:w-1/6 bg-indigo-500 h-[5px]" />
        </div>
        <h2 className="text-center text-3xl my-3">Let me introduce myself.</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-10 px-3 md:px-10 lg:px-40 my-4">
          <Image
            src="/headshot.PNG"
            alt="headshot"
            width={200}
            height={200}
            className="rounded-3xl"
          />
          <div className="text-2xl">
            I am currently pursuing a BSc in{" "}
            <span className={"font-semibold text-rose-600"}>
              Computer Science
            </span>{" "}
            at the University of Calgary. My professional experience includes
            roles as an{" "}
            <span className="font-semibold text-rose-600">
              automation developer
            </span>{" "}
            &{" "}
            <span className={"font-semibold text-rose-600"}>web developer</span>{" "}
            for both Alberta Health Services and Oncology Outcomes (O2).
            Passionate about coding, I am keen on delving deeper into the IT
            sector, with a particular interest in web/software development,
            DevOps, and testing.
          </div>
        </div>
      </section>
      <section className="py-10 px-7 lg:px-40 ">
        <div className="grid md:grid-cols-2 md:gap-x-7">
          <div>
            <h4 className="text-4xl font-bold my-2 text-center md:text-start">
              Profile
            </h4>
            <div className="my-5">
              <div className="flex justify-start items-center gap-2 text-indigo-500">
                <FontAwesomeIcon icon={faUser} size="xl" />
                <h5 className="text-2xl font-semibold">Full Name:</h5>
              </div>
              <p className="text-2xl">
                Sipeng He (<span className={maShanZheng.className}>何斯鹏</span>
                )
              </p>
            </div>
            <hr />
            <div className="my-5">
              <div className="flex justify-start items-center gap-2 text-indigo-500">
                <FontAwesomeIcon icon={faLocationDot} size="xl" />
                <h5 className="text-2xl font-semibold">Current Location:</h5>
              </div>
              <p className="text-2xl">
                Calgary, AB,{" "}
                <span className="text-red-600 font-bold">Canada</span>{" "}
                {canadaFlag}
              </p>
            </div>
            <hr />
            <div className="my-5">
              <div className="flex justify-start items-center gap-2 text-indigo-500">
                <FontAwesomeIcon icon={faHouse} size="xl" />
                <h5 className="text-2xl font-semibold">Hometown:</h5>
              </div>
              <p className="text-2xl">Shenzhen, Guangdong, China</p>
            </div>
            <hr />
            <div className="my-5">
              <div className="flex justify-start items-center gap-2 text-indigo-500">
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                <h5 className="text-2xl font-semibold">Email:</h5>
              </div>
              <p className="text-2xl">sipeng.he@ucalgary.ca</p>
            </div>
            <hr />
            <div className="my-5">
              <div className="flex justify-start items-center gap-2 text-indigo-500">
                <FontAwesomeIcon icon={faGraduationCap} size="xl" />
                <h5 className="text-2xl font-semibold">Education:</h5>
              </div>
              <p className="text-2xl">
                B.Sc. in Computer Science, University of Calgary
              </p>
            </div>
            <hr />
            <div className="my-5">
              <div className="flex justify-start items-center gap-2 text-indigo-500">
                <FontAwesomeIcon icon={faBuilding} size="xl" />
                <h5 className="text-2xl font-semibold">Current Position:</h5>
              </div>
              <p className="text-2xl">Web Developer at Oncology Outcomes</p>
            </div>
            <hr />
            <div className="my-5">
              <div className="flex justify-start items-center gap-2 text-indigo-500">
                <FontAwesomeIcon icon={faPersonBiking} size="xl" />
                <h5 className="text-2xl font-semibold">Hobbies:</h5>
              </div>
              <p className="text-2xl">Postcrossing, Ukulele, Hiking, Biking</p>
            </div>
          </div>
          <hr className="md:hidden" />
          <div className="mt-6 md:mt-0">
            <h4 className="mb-4 text-3xl font-bold text-center md:text-start">
              Skills
            </h4>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                HTML/CSS
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                JavaScript/TypeScript
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                React/Next.js
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                tailwind CSS
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                C#/ASP.NET core
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                Bootstrap
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                Node.js
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>

            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                Java/Spring Boot
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                SSIS
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="mb-1 text-xl font-medium dark:text-white">
                Python
              </div>
              <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-6 bg-indigo-500 rounded-full dark:bg-blue-500 text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5 gap-4">
          <a href="/projects">
            <ProfileButton>Projects Gallery</ProfileButton>
          </a>
          <a href="/resume.pdf" download="Resume-Sipeng_He">
            <ProfileButton>Download Resume</ProfileButton>
          </a>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Page;
