'use client'


import Image from "next/image";
import image from "../../public/Fotocv.jpg"
import { Skills } from "./components/skills/skills";
import { Historial } from "./components/historial/historial";

export default function Home() {

  function downloadCV() {
    const cvPath = 'Currículum actualizado.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Alejo Borracci.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <main className="flex min-h-screen h-full flex-col items-center mt-20">
      <div className="flex flex-col items-center h-1/2 w-7/12">
        <Image
          src={image}
          alt="foto"
          width={200}
          height={350}
          className="rounded-full mt-8 border-2"
        />

        <p className="mt-7 w-full text-center">
        ¡Hola! Soy Alejo Borracci, desarrollador Fullstack con pasión por aprender y trabajar en equipo. Me destaco por mi capacidad de adaptarme rápidamente, resolver problemas y aportar soluciones prácticas. Disfruto enfrentar nuevos desafíos y contribuir al éxito de los proyectos en los que participo.
        </p>
        <div className="flex items-center w-[100%] ">
          <a
            href="https://www.linkedin.com/in/alejo-borracci-2323a6199/"
            className=" w-[50%] text-center h-10 mt-10 text-blue-500 text-xl hover:text-green-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alejoborracci21"
            className="w-[50%] text-center h-10 mt-10 text-blue-500 text-xl hover:text-green-500"
          >
            Github
          </a>
        </div>

        <button className="mt-7 hover:text-emerald-400" onClick={downloadCV}>
          Descargar CV
        </button>
      </div>

      <section className="w-full h-1/2 flex items-center text-center mt-16">
        <Skills/>
      </section>
    </main>
  );
}
