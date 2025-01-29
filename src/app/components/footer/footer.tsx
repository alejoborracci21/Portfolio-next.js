import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[20vh] bg-[#131313] text-white mt-10">
      <div className="flex flex-row items-center justify-center">
        <>
          <a
            href="https://www.linkedin.com/in/alejo-borracci-2323a6199/"
            target="_blank"
            rel="noopener noreferrer"
            className="m-6 rounded-sm text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '3rem' }} />
          </a>

          <a
            href="https://github.com/alejoborracci21"
            target="_blank"
            rel="noopener noreferrer"
            className="m-6 rounded-sm text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '3rem' }} />
          </a>

          <a
            href="mailto:alejotrabajo2001@hotmail.com"
            className="m-6 rounded-sm text-2xl"
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '3rem', backgroundColor: 'transparent' }} />
          </a>
        </>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Alejo Borracci. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;