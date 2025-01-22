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
    <main className="flex min-h-screen h-full flex-col items-center mt-20">
      <Resume/>
    </main>
  );
}
