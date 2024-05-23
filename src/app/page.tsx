'use client'


import Image from "next/image";
import image from "../../public/Fotocv.jpg"
import { Skills } from "./components/skills";

export default function Home() {

  function downloadCV() {
    const cvPath = '/cv.docx';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Alejo Borracci.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <main className="flex min-h-screen h-[200vh] flex-col items-center mt-20">
        <div className="flex flex-col items-center h-1/2 w-7/12">
          <Image
            src={image}
            alt="foto"
            width={200}
            height={350}
            className="rounded-full mt-8 border-2"
          />

          <p className="mt-7 w-full text-center">
            ¡Hola! Soy Alejo, un apasionado
            <span className="text-blue-500">
              {" "}
              Desarrollador Web Fullstack
            </span>{" "}
            especializado principalmente en
            <span className="text-blue-500"> Front-end. </span>
            Me encanta crear interfaces de usuario atractivas y funcionales, y
            tengo un fuerte compromiso con la excelencia en cada proyecto en el
            que participo. Estoy emocionado de poder contribuir con mi
            experiencia y habilidades para llevar tu proyecto al siguiente
            nivel.
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

        <Skills />
    </main>
  );
}
