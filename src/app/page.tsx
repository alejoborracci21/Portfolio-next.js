'use client'

import { Resume } from "./components/resume/resume";
import { ProfileImage } from "./components/resume/image";
import Works from "./works/page";
import ResumePage from "./resume/page";
import { Form } from "./components/contact/form";
import Footer from "./components/footer/footer";

export default function Home() {

  const containerTws = 'w-full flex justify-center';

  return (
    <main className="flex flex-col min-h-screen h-full w-[100%] mt-10 overflow-x-hidden">
      <div className="flex flex-row items-start w-full h-[90vh] p-4 mb-0 ml-10 max-420:h-[120vh]">
        <Resume />
        <ProfileImage />
      </div>

      <div className={containerTws}>
        <div className="w-[80%] h-[1px] bg-white mt-4 mb-4 sm:mt-8 sm:mb-8 max-md:mt-10 max-md:mb-10"></div>
      </div>

      <div className="flex flex-col items-center h-[140vh] max-520:h-[320vh] max-sm:h-[280vh] max-md:h-[230vh] max-lg:h-[190vh] max-xl:h-[150vh] ">
        <h2 className="text-4xl text-[#e3194d] mb-10 mt-14">SOBRE MI</h2>
        <ResumePage/>
      </div>

      <div className={containerTws}>
        <div className="w-[80%] h-[1px] bg-white mt-4 mb-4 max-md:mt-10 max-md:mb-10"></div>
      </div>

      <div className="flex flex-col items-center min-h-screen h-[350vh] max-lg:h-[300vh] max-sm:h-[340vh]">
        <h2 className="text-4xl text-[#e3194d] mb-10 mt-14">MIS PROYECTOS</h2>
        <Works/>
      </div>

      <div className={containerTws}>
        <div className="w-[80%] h-[1px] bg-white mt-4 mb-4 max-md:mt-10 max-md:mb-10"></div>
      </div>

      <div className="flex flex-col items-center justify-center h-[100vh] mb-10">
        <h2 className="text-4xl text-[#e3194d] mb-10 mt-14 max-md:mb-0">CONTACTO</h2>
        <Form/>
      </div>
      
      <Footer/>
    </main>
  );
}