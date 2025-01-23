'use client'

import Image from "next/image";
import image from "../../public/Fotocv.jpg"
import { Resume } from "./components/resume/resume";

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
    <main className="flex flex-col min-h-screen h-full w-[100%] mt-10">
      <div className="flex flex-row items-start w-full h-full p-4 mb-0 ml-10">
        <Resume />
      </div>
    </main>
  );
}