import Image from 'next/image';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { WearfashionTechs, ALKTechs, DriversTechs } from './components/techs';

export default function Works() {
    return (
      <div className="w-full mt-24 bg-transparent h-[250vh] flex flex-col">
          <div className="flex flex-wrap w-[100] h-[40%] group">
            <div className="relative flex w-2/4 h-[50vh] bg-white border border-white ml-10 mt-14 overflow-hidden group">
              <div className="relative flex-1">
                <Image
                  src="/wearfashion.png"
                  alt="wearfashion image"
                  className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-20 object-cover"
                />

                <p className="absolute content-center bottom-0 left-0 w-full h-full text-black text-l font-serif px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                Desarrollamos un E-Commerce de ropa urbana en el que asumí un rol de liderazgo, trabajando tanto en el backend como en el frontend. En el backend, creé rutas y modelos, y gestioné el registro de usuarios en la página web. En el frontend, integré la base de datos con los diferentes productos y usuarios, desarrollé componentes para una interfaz de usuario intuitiva y atractiva, tambien gestioné el registro e inicio de sesion del usuario desde la creacion de la pagina hasta el registro en la base de datos y permisos dentro de la pagina. Este proyecto incluyó la creación de un sistema de gestión de productos, carritos de compra, y un proceso de pago eficiente, asegurando una experiencia de usuario fluida y agradable.
                </p>
              </div>
            </div>
            <div className="relative w-[10%] h-[50vh] top-14 ml-24 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <WearfashionTechs />
            </div>

            <div className="flex content-center items-center w-2/4 h-20 ml-10 bg-transparent">
              <a
                href="https://github.com/DanielJulianCardenasMora/proyecto_grupal_henry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30%] h-[50%] flex justify-center items-center hover:text-blue-600"
              >
                <FaGithub className="w-full h-full" />
              </a>
              <a
                href="https://wearfashion.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30%] h-[50%] flex justify-center items-center hover:text-blue-600"
              >
                <GrDeploy className="w-full h-full" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=78UhoOp5lmc&ab_channel=AlejoBorracci"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30%] h-[50%] flex justify-center items-center hover:text-blue-600"
              >
                <FaYoutube className="w-full h-full" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap w-[100] h-[40%] group ">
            <div className="relative w-[10%] h-[50vh] top-14 ml-auto opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <ALKTechs />
            </div>
            <div className="relative flex w-2/4 h-[50vh] border border-white bg-white ml-auto mr-10 mt-14 overflow-hidden group">
              <div className="relative flex-1">
                <Image
                  src="/alk.png"
                  alt="ALK image"
                  className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-20 object-cover"
                />
                <p className="absolute font-serif content-center bottom-0 left-0 w-full h-full text-black text-l px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                Mi rol en este proyecto fue desarrollar la página web para ALK Software desde cero, utiliza Next.js, TypeScript, React, TailwindCSS, HTML y CSS para crear una presencia online profesional y funcional. El objetivo es mostrar los servicios de ALK, mejorar la experiencia del usuario y optimizar el rendimiento y SEO del sitio. Las etapas del desarrollo incluyen la configuración del proyecto, el diseño y maquetación del sitio, la implementación de funcionalidades interactivas y la optimización y despliegue del sitio en una plataforma de hosting adecuada.
                </p>
              </div>
            </div>
            <div className="flex content-center items-center w-2/4 h-20 ml-auto mr-10 bg-transparent">
              <a
                href="https://github.com/alejoborracci21/ALK-Software"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50%] h-[50%] flex justify-center items-center hover:text-blue-600"
              >
                <FaGithub className="w-full h-full" />
              </a>
              <a
                href="https://alk-software.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50%] h-[50%] flex justify-center items-center hover:text-blue-600"
              >
                <GrDeploy className="w-full h-full" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap w-[100] h-[40%] group">
            <div className="relative flex w-2/4 h-[50vh] border border-white bg-white ml-10 mt-14 overflow-hidden group">
              <div className="relative flex-1">
                <Image
                  src="/drivers.png"
                  alt="Drivers image"
                  className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-20 object-cover"
                />
                <p className="absolute content-center bottom-0 left-0 w-full h-full text-black text-l font-serif px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                  Drivers fue un proyecto individual que realicé en SoyHenry. Al
                  ingresar, lo primero que vemos es la página de inicio o
                  landing page, luego nos dirigimos a la página principal donde
                  se muestran los distintos corredores almacenados en la base de
                  datos. Los usuarios pueden filtrar estos corredores según
                  equipos, edad y nombre. Además, es posible agregar nuevos
                  corredores a través de un formulario. Por último, hay una
                  sección Acerca de mí, donde se presenta una breve descripción
                  del proyecto y de mí como desarrollador.
                </p>
              </div>
            </div>
            <div className="relative w-[10%] h-[50vh] top-14 ml-24 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <DriversTechs />
            </div>
            <div className="flex content-center items-center w-2/4 h-20 ml-10 bg-transparent">
              <a
                href="https://github.com/user/repo1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[100%] h-[50%] flex justify-center items-center hover:text-blue-600"
              >
                <FaGithub className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
    );
}