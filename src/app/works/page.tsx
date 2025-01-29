import React, { useEffect } from 'react';
import { Projects } from './components/carrusel';
import { Texts } from './components/text';
import projectsData from './projects/projects.json';

const twcss = {
  projects: 'col-span-2 row-span-3',
  texts: 'col-span-2 row-span-3'
}

export default function Works() {
    const numberOfProjects = projectsData.length;
    const height = `${200 * Math.ceil(numberOfProjects / 3)}vh`;

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

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="grid grid-cols-4 gap-4 w-[100%] ml-12" style={{ height }}>
          {projectsData.map((project) => (
            <React.Fragment key={project.id}>
              <div className={`${twcss.projects} fade-in`}>
                <Projects images={project.images} />
              </div>
              <div className={`${twcss.texts} fade-in`}>
                <Texts text={project.description} name={project.name}/>
              </div>
            </React.Fragment>
          ))}
        </div>
    );
}