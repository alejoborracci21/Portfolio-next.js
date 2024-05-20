import Link from "next/link"

export const Nav = () => {
    return (
      <div className="flex justify-between items-center w-1/2 h-20 px-4 top-0 ">
        <h3 className="text-lg font-semibold">Alejo Borracci</h3>
        <div className="space-x-4">
          <Link href="/"><button className="text-lg text-slate-600 hover:text-slate-50">Sobre mi</button></Link>
          <Link href="/works"><button className="text-lg text-slate-600 hover:text-slate-50">Proyectos</button></Link>
          <Link href="/contact"><button className="text-lg text-slate-600 hover:text-slate-50">Contactame</button></Link>
        </div>
      </div>
    );
}
