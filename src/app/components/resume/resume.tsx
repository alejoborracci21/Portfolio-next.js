'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Resume = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  const linkStyles = 'bg-[#131313] flex items-center justify-center h-[80%] w-[80px] rounded-md text-2xl p-2 m-2';

  return (
    <div className="h-[85vh] w-[50vw] text-white max-lg:w-[100%] max-lg:flex max-lg:flex-col">
      <div className='max-lg:w-[100vw]'>
        <h2 className="text-3xl m-4">
          Hola, <span className="text-[#e3194d]">mi nombre es</span>
        </h2>
        <h1 className="text-6xl m-4">Alejo Borracci</h1>
        <h2 className="text-3xl m-4">Desarrollador Web Full Stack</h2>
      </div>

      <p className="m-4 mt-12 ">
      Soy una persona apasionada por la programación y los desafíos que representan los proyectos tecnológicos. Como desarrollador fullstack, me destaco por mi capacidad de adaptarme rápidamente a nuevos entornos y aprender con eficiencia. Disfruto colaborar en equipo, enfrentando problemas complejos con creatividad y dedicación. Mi entusiasmo por el aprendizaje constante me impulsa a crecer tanto profesional como personalmente, aportando soluciones innovadoras y comprometidas en cada proyecto en el que participo.
      </p>

      <h1 className="ml-4 mt-14 text-3xl">Mis redes</h1>
      <div className="grid grid-cols-3 gap-4 w-[100%] h-[15%] p-4 rounded-sm max-sm:w-[100vw]">
        {loading ? (
          <div className="col-span-3 flex items-center justify-center">
            <p className="text-2xl">Cargando...</p>
          </div>
        ) : (
          <div className='flex flex-grow w-[100%] '>
            <a
              href="https://www.linkedin.com/in/alejo-borracci-2323a6199/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '1.5rem' }} />
            </a>

            <a
              href="https://github.com/alejoborracci21"
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5rem' }} />
            </a>

            <a
              href="mailto:alejotrabajo2001@hotmail.com"
              className={linkStyles}
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.5rem', backgroundColor: 'transparent' }} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
