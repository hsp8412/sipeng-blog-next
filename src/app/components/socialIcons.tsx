import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  const icons = [
    {
      name: "Linkedin",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/sipeng-he-250654190/",
    },
    {
      name: "GitHub",
      icon: faGithubSquare,
      link: "https://github.com/hsp8412",
    },
    {
      name: "Facebook",
      icon: faFacebookSquare,
      link: "https://www.facebook.com/profile.php?id=100015661125991",
    },
    {
      name: "Instagram",
      icon: faInstagramSquare,
      link: "https://www.instagram.com/hsp_steven/",
    },
    {
      name: "twitter",
      icon: faTwitterSquare,
      link: "https://www.twitter.com",
    },
  ];
  return (
    <div className="icons d-flex justify-content-center text-white">
      {icons.map(({ name, icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={icon}
            className="hover:text-indigo-500 transition-all duration-200 ease-in text-4xl lg:text-5xl "
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
