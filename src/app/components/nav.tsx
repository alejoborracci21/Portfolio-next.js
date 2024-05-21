'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export const Nav = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: scrollY > 0 ? "#000321" : "transparent",
  };

  return (
    <div className="flex fixed flex-col items-center w-full h-20" style={navStyle}>
      <div
      className="fixed flex justify-between items-center w-1/2 h-20 px-4 top-0"
    >
      <h3 className="text-lg font-semibold">Alejo Borracci</h3>
      <div className="space-x-4">
        <Link href="/">
          <button className="text-lg text-slate-600 hover:text-slate-50">
            Sobre mi
          </button>
        </Link>
        <Link href="/works">
          <button className="text-lg text-slate-600 hover:text-slate-50">
            Proyectos
          </button>
        </Link>
        <Link href="/contact">
          <button className="text-lg text-slate-600 hover:text-slate-50">
            Contactame
          </button>
        </Link>
      </div>
    </div>
    </div>
    
  );
};
