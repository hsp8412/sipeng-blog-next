import React from "react";
import SocialIcons from "@/app/components/socialIcons";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center px-5 md:px-10 py-20 flex flex-col flex-col-reverse md:flex-row justify-between"
      style={{ backgroundImage: "url('/triangles.png')" }}
    >
      <div>
        <div className="flex justify-center flex-wrap gap-3 text-2xl text-white mb-5 md:mb-0">
          <a href="" className="hover:underline">
            Home
          </a>
          <a href="" className="hover:underline">
            Posts
          </a>
          <a href="" className="hover:underline">
            Projects
          </a>
          <a href="" className="hover:underline">
            Gallery
          </a>
          <a href="" className="hover:underline">
            Contact
          </a>
        </div>
        <p className="text-xl text-white mt-2 mb-2 text-center md:text-start">
          Copyright © 2023 | Sipeng He
        </p>
      </div>
      <div className="flex justify-center mb-6 md:mb-0">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Footer;
