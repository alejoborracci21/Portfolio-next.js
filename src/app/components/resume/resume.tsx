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
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[85vh] w-[50vw] text-white">
      <div>
        <h2 className="text-3xl m-4">
          Hola, <span className="text-[#e3194d]">mi nombre es</span>
        </h2>
        <h1 className="text-6xl m-4">Alejo Borracci</h1>
        <h2 className="text-3xl m-4">Desarrollador Web Full Stack</h2>
      </div>

      <p className="m-4 mt-12">
      Soy una persona apasionada por la programación y los desafíos que representan los proyectos tecnológicos. Como desarrollador fullstack, me destaco por mi capacidad de adaptarme rápidamente a nuevos entornos y aprender con eficiencia. Disfruto colaborar en equipo, enfrentando problemas complejos con creatividad y dedicación. Mi entusiasmo por el aprendizaje constante me impulsa a crecer tanto profesional como personalmente, aportando soluciones innovadoras y comprometidas en cada proyecto en el que participo.
      </p>

      <h1 className="ml-4 mt-14 text-3xl">Contacto</h1>
      <div className="grid grid-cols-3 gap-4 w-[30%] h-[12%] p-4 rounded-sm">
        {loading ? (
          <div className="col-span-3 flex items-center justify-center">
            <p className="text-2xl">Cargando...</p>
          </div>
        ) : (
          <>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/alejo-borracci-2323a6199/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#131313] flex items-center justify-center h-full w-full rounded-sm text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '1.5rem' }} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/alejoborracci21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#131313] flex items-center justify-center h-full w-full rounded-sm text-2xl"
            >
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '1.5rem' }} />
            </a>

            {/* Email */}
            <a
              href="mailto:alejotrabajo2001@hotmail.com"
              className="bg-[#131313] flex items-center justify-center h-full w-full rounded-sm text-2xl"
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.5rem', backgroundColor: 'transparent' }} />
            </a>
          </>
        )}
      </div>
    </div>
  );
};
