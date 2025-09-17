"use client";

import type { StaticImageData } from "next/image";
import { WindowShell } from "./WindowShell";

type InformationWindowProps = {
  icon: StaticImageData;
  visible: boolean;
  onClose: () => void;
};

export function InformationWindow({ icon, visible, onClose }: InformationWindowProps) {
  if (!visible) {
    return null;
  }

  const age = Math.floor((Date.now() - new Date("03/15/1996").getTime()) / 31557600000);

  return (
    <WindowShell
      title="About This Person"
      icon={icon}
      onClose={onClose}
      className="max-w-xl"
      bodyClassName="h-[375px] overflow-y-auto"
      footerContent={
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-20 border border-black bg-[#C0C0C0] text-xs font-black"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-20 border border-black bg-[#C0C0C0] text-xs font-black"
          >
            Cancel
          </button>
        </div>
      }
    >
      <div className="space-y-2 text-left">
        <h1 className="text-xl font-semibold">Registered To:</h1>
        <p className="ml-4 mb-0">Name: Thomas Hanna</p>
        <p className="ml-4 mb-0">Job: Web Developer</p>
        <p className="ml-4 mb-0">Age: {age}</p>
        <p className="ml-4 mb-0">University: Rutgers NB 2020</p>
        <p className="ml-4 mb-0">Degree: Computer Science</p>
        <p className="ml-4 mb-0">Location: NYC Metro Area</p>
        <p className="ml-4 mb-0">Email: THanna96@gmail.com</p>
        <p className="ml-4 mb-0">About:</p>
        <p className="ml-4 mb-0">
          My interest in programming and web development officially started around
          2015. I was struggling to find a career path in my first year of college
          and had no direction. I passed my first semester and was considering
          leaving and pursuing something else. Then, in my second semester I took a
          Java programming class and realized something: programming ROCKS.
        </p>
        <p className="ml-4 mb-0">
          Fast forward years later and I am currently working as a web developer and I
          could not be happier. I primarily do front end work with JavaScript using
          React and Angular but I am also open to back end development too!
        </p>
      </div>
    </WindowShell>
  );
}
