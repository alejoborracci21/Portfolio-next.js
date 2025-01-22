'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import argentina from "@/../public/argentina.png";
import styles from './nav.module.css';

export const Nav = () => {
  const pathname = usePathname();

  function downloadCV(event: React.MouseEvent<HTMLButtonElement>) {
    const cvPath = 'Currículum actualizado.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Alejo Borracci.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  const linkStyles = {
    home: {
      color: pathname === "/" ? "#ffffff" : "#898989"
    },
    works: {
      color: pathname === "/works" ? "#ffffff" : "#898989"
    },
    resumen: {
      color: pathname === "/resume" ? "#ffffff" : "#898989"
    },
    contact: {
      color: pathname === "/contact" ? "#ffffff" : "#898989"
    }
  };

  return (
    <div className={`flex flex-row items-center w-full h-full  p-4`}>
        <div className="text-center justify-center space-x-4  w-full">
          <Link href="/" style={linkStyles.home}>Acerca de mi</Link>
          <Link href="/works" style={linkStyles.works}>Portfolio</Link>
          <Link href="/resume" style={linkStyles.resumen}>Resumen</Link>
          <Link href="/contact" style={linkStyles.contact}>Contacto</Link>
        </div>
          <button className="text-nowrap bg-[#e3194d] rounded-xl p-3" onClick={downloadCV}>Descargar CV</button>

    </div>
  );
};
