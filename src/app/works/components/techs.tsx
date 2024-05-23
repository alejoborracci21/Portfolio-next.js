import { SiJavascript, SiTypescript, SiExpress, SiSequelize, SiRedux, SiReact, SiHtml5, SiCss3, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

export const WearfashionTechs = () => {
    return (
        <div className="flex flex-wrap bg-transparent h-[100%] items-center content-center">
            <ol className="w-full">
                <li className="flex items-center mb-2"><SiJavascript className="mr-2"/> Javascript</li>
                <li className="flex items-center mb-2"><SiReact className="mr-2"/> React</li>
                <li className="flex items-center mb-2"><SiRedux className="mr-2"/> Redux</li>
                <li className="flex items-center mb-2"><SiHtml5 className="mr-2"/> HTML5</li>
                <li className="flex items-center mb-2"><SiCss3 className="mr-2"/> CSS3</li>
                <li className="flex items-center mb-2"><SiSequelize className="mr-2"/> Sequelize</li>
                <li className="flex items-center mb-2"><SiPostgresql className="mr-2"/> PostgreSQL</li>
                <li className="flex items-center mb-2"><FaNode className="mr-2"/> Node</li>
                <li className="flex items-center mb-2"><SiExpress className="mr-2"/> Express</li>
            </ol>
        </div>
    );
}

export const ALKTechs = () => {
    return (
      <div className="flex flex-wrap bg-transparent h-[100%] items-center content-center">
        <ol type={"A"} className="w-full">
          <li className="flex items-center mb-5">
            <SiJavascript className="mr-2" /> Javascript
          </li>
          <li className="flex items-center mb-5">
            <SiTypescript className="mr-2" /> Typescript
          </li>
          <li className="flex items-center mb-5">
            <SiTailwindcss className="mr-2" /> TailwindCSS
          </li>
          <li className="flex items-center mb-5">
            <RiNextjsFill className="mr-2" /> Next.js
          </li>
          <li className="flex items-center mb-5">
            <SiHtml5 className="mr-2" /> HTML5
          </li>
          <li className="flex items-center mb-5">
            <SiCss3 className="mr-2" /> CSS3
          </li>
          <li className="flex items-center mb-5">
            <SiReact className="mr-2" /> React
          </li>
        </ol>
      </div>
    );
}

export const DriversTechs = () => {
    return (
        <div className="flex flex-wrap bg-transparent h-[100%] items-center content-center">
            <ol type={"A"} className="w-full list-disc pl-8">
                <li className="flex items-center mb-3 "><SiJavascript className="mr-2"/> Javascript</li>
                <li className="flex items-center mb-3 "><SiExpress className="mr-2"/> Express</li>
                <li className="flex items-center mb-3 "><FaNode className="mr-2"/> Node.js</li>
                <li className="flex items-center mb-3 "><SiSequelize className="mr-2"/> Sequelize</li>
                <li className="flex items-center mb-3 "><SiPostgresql className="mr-2"/> PostgreSQL</li>
                <li className="flex items-center mb-3 "><SiHtml5 className="mr-2"/> HTML5</li>
                <li className="flex items-center mb-3 "><SiCss3 className="mr-2"/> CSS3</li>
            </ol>
        </div>
    );
}
