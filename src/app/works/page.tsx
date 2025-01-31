'use client'

import React, { useEffect, useState } from 'react';
import { Projects } from '../components/works/carrusel';
import { Texts } from '../components/works/text';
import projectsData from './projects/projects.json';

const twcss = {
  projects: 'col-span-2 row-span-3',
  texts: 'col-span-2 row-span-3 '
}

export default function Works() {
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
      const handleScroll = () => {
          const elements = document.querySelectorAll('.fade-in');
          elements.forEach((el) => {
              const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight) {
                  el.classList.add('visible');
              }
          });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="grid grid-cols-4 gap-4 w-[100%] h-full min-h-screen ml-12 border-[#1b1c1e] rounded-lg overflow-auto max-md:flex max-md:flex-col max-md:items-center">
        {projectsData.map((project) => (
          <div key={project.id} className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full fade-in max-md:flex max-md:flex-col max-md:items-center max-md:w-[90%] max-md:flex-grow">
            
            {/* Nombre del proyecto (arriba en móviles) */}
            <div className="col-span-2 text-white text-2xl font-bold max-md:text-center max-md:order-1">
              {project.name}
            </div>

            {/* Carrusel de imágenes (centro en móviles) */}
            <div className={`${twcss.projects} max-md:order-2 max-md:w-full`}>
              <Projects images={project.images} />
            </div>

            {/* Descripción (abajo en móviles) */}
            <div className={`${twcss.texts} max-md:order-3 max-md:w-full`}>
              <Texts text={project.description} name={project.name} />
            </div>
          </div>
        ))}
      </div>
  );
}
