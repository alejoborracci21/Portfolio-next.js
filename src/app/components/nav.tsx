'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import argentina from "@/../public/argentina.png"

export const Nav = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const pathname = usePathname()
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
    backgroundColor: scrollY > 0 ? "#64A3FF" : "transparent",
  };

  const styles = {
    home: {
      color: pathname === "/" ? "white" : ""
    },
    works: {
      color: pathname === "/works" ? "white" : ""
    },
    contact: {
      color: pathname === "/contact" ? "white" : ""
    }

  }

  return (
    <div
      className="flex fixed z-[1000] flex-col items-center w-full h-20"
      style={navStyle}
    >
      <div className="fixed flex justify-between items-center w-1/2 h-20 px-4 top-0">
        <div className="flex content-center items-center">
          <Image src={argentina} alt="argentina" className="p-1 mr-3" />
          <h2 className="text-lg font-semibold w-40">Alejo Borracci</h2>
        </div>

        <div className="space-x-4" >
          <Link href="/" className="text-gray-500" style={styles.home}>Sobre mi</Link>

          <Link href="/works" className="text-gray-500" style={styles.works}>
            Proyectos
          </Link>
          <Link href="/contact" className="text-gray-500" style={styles.contact}>
            Contactame
          </Link>
        </div>
      </div>
    </div>
  );
};
