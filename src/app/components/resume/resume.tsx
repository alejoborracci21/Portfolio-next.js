'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Resume = () => {
  return (
    <div className="h-[85vh] w-[50vw] text-white">
      <div>
        <h2 className="text-3xl m-4">
          Hola, <span className="text-red-600">soy</span>
        </h2>
        <h1 className="text-6xl m-4">Alejo Borracci</h1>
        <h2 className="text-3xl m-4">Desarrollador Web Full Stack</h2>
      </div>

      <p className="m-4 mt-14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut arcu et ligula
        mattis scelerisque vel quis augue. Duis elementum tristique ante vitae finibus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Praesent id rutrum mi. Morbi vitae nibh
        eu diam fringilla dignissim nec vel elit. Donec a neque vulputate, sollicitudin mauris sit
        amet, hendrerit mi. Phasellus vitae.
      </p>

      <h1 className="ml-4 mt-14 text-3xl">Contacto</h1>
      <div className="grid grid-cols-3 gap-4  w-[30%] h-[12%] p-4 rounded-lg ">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alejo-borracci-2323a6199/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#202020] flex items-center justify-center h-full w-full rounded-sm"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/alejoborracci21"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#202020] flex items-center justify-center h-full w-full rounded-sm"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        {/* Email */}
        <a
          href="mailto:alejotrabajo2001@hotmail.com"
          className="bg-[#202020] flex items-center justify-center h-full w-full rounded-sm"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" style={{backgroundColor:"transparent" }}/>
        </a>
      </div>
    </div>
  );
};
