import React from "react";
import TypeText from "@/app/components/typeText";
import HeroButton from "@/app/components/buttons/heroButton";

const Page = () => {
  return (
    <div className="">
      <div className="header-banner relative bg-header bg-center bg-no-repeat bg-cover h-screen relative top-[-80px] z-[1]">
        <div className="header-content flex flex-col justify-items-center items-center py-[80px] px-5">
          <h1 className="text-white text-3xl mt-36 text-indigo-500 font-bold">
            Hello World
          </h1>
          <div className="mt-4 h-[36px] md:h-[60px]">
            <TypeText text="I am Sipeng He." delay={100} />
          </div>
          <h1 className="mt-6 text-white text-xl text-center">
            Computer Science Student | Developer
          </h1>
          <div className="mt-6">
            <HeroButton>More about me</HeroButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
