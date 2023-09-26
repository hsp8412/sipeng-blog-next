import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const InfoCard = () => {
  return (
    <div className="flex flex-col items-center px-4 py-4 shadow bg-white rounded">
      <img src="/avatar.jpg" alt="avatar" className="rounded-full w-32" />
      <h3 className={"text-2xl my-2 font-bold text-indigo-600"}>Sipeng He</h3>
      <h5 className={"text-center text-lg font-semibold"}>
        Computer Science Student at the University of Calgary
      </h5>
      <div className={"mt-1"}>
        Email:{" "}
        <a
          href="mailto:sipeng.he@ucalgary.ca"
          className="info-email font-light hover:underline text-neutral-700"
        >
          sipeng.he@ucalgary.ca
        </a>{" "}
      </div>
      <div className="icons flex gap-2 justify-center mt-1">
        <a
          href="https://www.linkedin.com/in/sipeng-he-250654190/"
          target="_blank"
          rel="noopener"
          className="icon-link hover:text-indigo-400"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/hsp8412"
          target="_blank"
          rel="noopener"
          className="icon-link hover:text-indigo-400"
        >
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100015661125991"
          target="_blank"
          rel="noopener"
          className="icon-link hover:text-indigo-400"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/hsp_steven/"
          target="_blank"
          rel="noopener"
          className="icon-link hover:text-indigo-400"
        >
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </a>
      </div>
      <a
        href="/resume.pdf"
        download="Resume-Sipeng_He"
        className={"hover:underline text-neutral-700 font-light"}
      >
        Download my resume
      </a>
    </div>
  );
};

export default InfoCard;
