import React from "react";
import SocialIcons from "@/app/components/socialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center px-5 md:px-10 py-20 flex flex-col flex-col-reverse md:flex-row justify-between"
      style={{ backgroundImage: "url('/triangles.png')" }}
    >
      <div>
        <div className="flex justify-center flex-wrap gap-3 text-2xl text-white mb-5 md:mb-0">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
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
