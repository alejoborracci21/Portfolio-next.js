'use client'

import { Resume } from "./components/resume/resume";
import { ProfileImage } from "./components/resume/image";
import Works from "./works/page";
import ResumePage from "./resume/page";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen h-full w-[100%] mt-10 overflow-x-hidden">
      <div className="flex flex-row items-start w-full h-full p-4 mb-0 ml-10">
        <Resume />
        <ProfileImage />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white mb-10 mt-14">SOBRE MI</h1>
        <ResumePage/>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white mb-10 mt-14">MIS PROYECTOS</h1>
        <Works/>
      </div>

      // comentario de prueba
        <div>
          <p>hola</p>
        </div>
    </main>
  );
}