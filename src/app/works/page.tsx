'use client'

import React, { useEffect, useState } from 'react';
import { Projects } from '../components/works/carrusel';
import { Texts } from '../components/works/text';
import projectsData from './projects/projects.json';

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
    <div className="flex flex-col items-center justify-center w-full min-h-screen border-[#1b1c1e] rounded-lg">
      {projectsData.map((project) => (
        <div key={project.id} className="flex flex-col items-center w-full h-auto fade-in p-4 space-y-4 mb-24">
          
          {/* Título del proyecto (arriba) */}
          <h1 className="mt-14 text-white text-2xl font-bold max-md:text-center">
            {project.name}
          </h1>

          {/* Carrusel de imágenes (centro) */}
          <div className="w-full max-w-[70vw] h-auto max-md:max-w-full">
            <Projects images={project.images} />
          </div>

          {/* Descripción (abajo) */}
          <div className="w-full max-w-[70vw] max-md:max-w-full ">
            <Texts text={project.description} name={project.name} />
          </div>
        </div>
      ))}
    </div>
  );
}