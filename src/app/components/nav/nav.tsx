'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path/to/cv.pdf';
    link.download = 'CV_Alejo_Borracci.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const handleNavigation = (path: string) => {
    setIsOpen(false); 
    setTimeout(() => {
      router.push(path); 
    }, 100); 
  };

  return (
    <div className="flex flex-row items-center w-full h-full p-4 mb-0">
      <div className="text-center justify-center space-x-4 w-full max-md:opacity-0">
        <Link href="/" style={linkStyles.home}>Inicio</Link>
        <Link href="/works" style={linkStyles.works}>Proyectos</Link>
        <Link href="/resume" style={linkStyles.resumen}>Sobre mí</Link>
        <Link href="/contact" style={linkStyles.contact}>Contáctame</Link>
      </div>

      {/* Menú hamburguesa */}
      <div className="absolute left-0 ml-5 md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)}>
            <div className="relative mt-24 w-48 bg-[#131313] rounded-lg shadow-lg ml-5 p-4" onClick={(e) => e.stopPropagation()}>
              <button className='absolute top-2 right-2 text-white' onClick={() => setIsOpen(false)}>X</button>
              <Link href="/" className="block px-4 py-2 text-white w-full" onClick={() => handleNavigation("/")}>
                Inicio
              </Link>
              <Link href="/works" className="block px-4 py-2 text-white w-full" onClick={() => handleNavigation("/works")}>
                Proyectos
              </Link>
              <Link href="/resume" className="block px-4 py-2 text-white w-full" onClick={() => handleNavigation("/resume")}>
                Sobre mí
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-white w-full" onClick={() => handleNavigation("/contact")}>
                Contáctame
              </Link>
            </div>
          </div>
        )}
      </div>

      <button className="text-nowrap text-white bg-[#e3194d] rounded-full w-40 h-12 p-2 mr-5" onClick={downloadCV}>Descargar CV</button>
    </div>
  );
};

export default Nav;