'use client'

import { Resume } from "./components/resume/resume";
import { ProfileImage } from "./components/resume/image";
import Contact from "./contact/page";
import Works from "./works/page";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen h-full w-[100%] mt-10">
      <div className="flex flex-row items-start w-full h-full p-4 mb-0 ml-10">
        <Resume />
        <ProfileImage />
      </div>
      <div className="">
        <Works/>
      </div>
    </main>
  );
}