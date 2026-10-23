import React from "react";
import TypeText from "@/app/components/typeText";
import HeroButton from "@/app/components/buttons/heroButton";
import SocialIcons from "@/app/components/socialIcons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faLocationDot,
  faLanguage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {maShanZheng} from "@/app/fonts";
import ProfileButton from "@/app/components/buttons/profileButton";

const canadaFlag = "\uD83C\uDDE8\uD83C\uDDE6";
// const chinaFlag = "\uD83C\uDDE8\uD83C\uDDF3";

const skills = [
  {
    name: "C#",
    color: "bg-[#239120]",
  },
  {
    name: "Python",
    color: "bg-[#3776ab]",
  },
  {
    name: "HTML",
    color: "bg-[#e34c26]",
  },
  {
    name: "JavaScript",
    color: "bg-[#f7df1e]",
  },
  {
    name: "TypeScript",
    color: "bg-[#3178c6]",
  },
  {
    name: "CSS",
    color: "bg-[#563d7c]",
  },
  {
    name: "React",
    color: "bg-[#61dafb]",
  },
  {
    name: "Next.js",
    color: "bg-[#000000]",
  },
  {
    name: "Angular",
    color: "bg-[#e10079]",
  },
  {
    name: ".NET",
    color: "bg-[#512bd4]",
  },
  {
    name: "AWS",
    color: "bg-[#ff9900]",
  },
  {
    name: "Node.js",
    color: "bg-[#83cd29]",
  },
  {
    name: "Git",
    color: "bg-[#f05032]",
  },
  {
    name: "SQL",
    color: "bg-[#f29111]",
  },
  {
    name: "MongoDB",
    color: "bg-[#47a248]",
  },
  {
    name: "Docker",
    color: "bg-[#2496ed]",
  },
];

const Page = () => {
  return (
    <div className="w-full">
      <header className="relative mt-[-80px] z-[1] min-h-screen header-banner bg-header bg-scroll xl:bg-fixed bg-cover bg-center bg-no-repeat">
        <div className="header-content absolute inset-0 flex flex-col justify-center items-center px-5 h-full">
          <h1 className="text-white text-2xl md:text-3xl mt-20 md:mt-36 font-bold">
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
            Full-Stack Developer
          </h1>
          <a className="mt-6" href="#about">
            <HeroButton>More about me</HeroButton>
          </a>
          <div className="mt-10">
            <SocialIcons />
          </div>
        </div>
      </header>
      <section id="about" className="bg-neutral-100 px-5 py-10">
        <h2 className="text-center text-4xl text-blue-800 font-semibold">
          About me
        </h2>
        <div className="my-3 w-full flex justify-center">
          <div className="w-3/4 sm:w-1/2 lg:w-1/6 bg-blue-800 h-[5px]" />
        </div>
        <h2 className="text-center text-3xl my-3">Let me introduce myself.</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-10 px-3 md:px-10 lg:px-40 my-4">
          <img
            src="/headshot.png"
            alt="headshot"
            className="rounded-3xl w-[200px] h-[200px]"
          />
          <div className="text-2xl font-light">
            I graduated from the University of Calgary with a Bachelor of
            Science in{" "}
            <span className="font-semibold text-rose-600">
              Computer Science
            </span>{" "}
            and currently work as a{" "}
            <span className="font-semibold text-rose-600">
              Full-Stack Application Developer
            </span>{" "}
            at Equinox Software Design Corporation.
          </div>
        </div>
      </section>
      <section className="py-10 px-7 lg:px-40 ">
        <div className="grid md:grid-cols-2 md:gap-x-7">
          <div className="font-light">
            <h4 className="text-4xl font-bold my-2 text-center md:text-start">
              Profile
            </h4>
            <div className="my-3">
              <div className="flex justify-start items-center gap-2 text-blue-800">
                <FontAwesomeIcon icon={faUser} size="xl" />
                <h5 className="text-xl font-semibold">Full Name:</h5>
              </div>
              <p className="text-lg">
                Sipeng He (<span className={maShanZheng.className}>何斯鹏</span>
                )
              </p>
            </div>
            <hr />
            <div className="my-3">
              <div className="flex justify-start items-center gap-2 text-blue-800">
                <FontAwesomeIcon icon={faLocationDot} size="xl" />
                <h5 className="text-xl font-semibold">Current Location:</h5>
              </div>
              <p className="text-lg">
                Calgary, AB,{" "}
                <span className="text-red-600 font-bold">Canada</span>{" "}
                {canadaFlag}
              </p>
            </div>
            <hr />
            <div className="my-3">
              <div className="flex justify-start items-center gap-2 text-blue-800">
                <FontAwesomeIcon icon={faHouse} size="xl" />
                <h5 className="text-xl font-semibold">Hometown:</h5>
              </div>
              <p className="text-lg">Shenzhen, Guangdong, China</p>
            </div>
            <hr />
            <div className="my-3">
              <div className="flex justify-start items-center gap-2 text-blue-800">
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                <h5 className="text-xl font-semibold">Email:</h5>
              </div>
              <p className="text-lg">hsp8412@hotmail.com</p>
            </div>
            <hr />
            <div className="my-3">
              <div className="flex justify-start items-center gap-2 text-blue-800">
                <FontAwesomeIcon icon={faGraduationCap} size="xl" />
                <h5 className="text-xl font-semibold">Education:</h5>
              </div>
              <p className="text-lg">
                B.Sc. in Computer Science, University of Calgary
              </p>
            </div>
            <hr />
            <div className="my-3">
              <div className="flex justify-start items-center gap-2 text-blue-800">
                <FontAwesomeIcon icon={faBuilding} size="xl" />
                <h5 className="text-xl font-semibold">Current Position:</h5>
              </div>
              <p className="text-lg">
                Full-Stack Application Developer at Equinox Software Design
                Corporation
              </p>
            </div>
            <hr />
            <div className="my-3">
              <div className="flex justify-start items-center gap-2 text-blue-800">
                <FontAwesomeIcon icon={faLanguage} size="xl" />
                <h5 className="text-xl font-semibold">Languages:</h5>
              </div>
              <p className="text-lg">English, French, Chinese (Mandarin)</p>
            </div>
          </div>
          <hr className="md:hidden" />
          <div className="mt-6 md:mt-0 font-light">
            <h4 className="mb-4 text-3xl font-bold text-center md:text-start">
              Skills
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center ${skill.color} text-white text-lg font-light py-4 hover:scale-105 translate-x-0 transition-transform duration-300 ease-in-out`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5 gap-4">
          <a href="/projects">
            <ProfileButton>Projects Gallery</ProfileButton>
          </a>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Page;
